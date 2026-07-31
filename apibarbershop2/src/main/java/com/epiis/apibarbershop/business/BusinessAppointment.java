package com.epiis.apibarbershop.business;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestAppointmentInsert;
import com.epiis.apibarbershop.dto.request.RequestAppointmentUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.entity.EntityAppointmentDetail;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentDetail;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.service.TwilioService;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.staticdata.EnumAppointmentStatus;

@Service
public class BusinessAppointment {
	private final RepositoryAppointment repositoryAppointment;
	private final RepositoryAppointmentDetail repositoryAppointmentDetail;
	private final RepositoryCustomer repositoryCustomer;
	private final TwilioService twilioService;

	public BusinessAppointment(
		RepositoryAppointment repositoryAppointment,
		RepositoryAppointmentDetail repositoryAppointmentDetail,
		RepositoryCustomer repositoryCustomer,
		TwilioService twilioService) {
		this.repositoryAppointment = repositoryAppointment;
		this.repositoryAppointmentDetail = repositoryAppointmentDetail;
		this.repositoryCustomer = repositoryCustomer;
		this.twilioService = twilioService;
	}

	public ResponseAppointmentInsert insert(RequestAppointmentInsert request) {
		ResponseAppointmentInsert response = new ResponseAppointmentInsert();

		java.util.Date now = new java.util.Date();

		String startHourStr = request.getStartHour();
		if (startHourStr != null && startHourStr.length() == 5) startHourStr += ":00";

		String endHourStr = request.getEndHour();
		if (endHourStr != null && endHourStr.length() == 5) endHourStr += ":00";

		EntityAppointment entity = new EntityAppointment();
		entity.setIdAppointment(UUID.randomUUID().toString());
		entity.setIdCustomer(request.getIdCustomer());
		entity.setIdUser(request.getIdUser());
		entity.setAppointmentDate(Date.valueOf(request.getAppointmentDate()));
		entity.setStartHour(Time.valueOf(startHourStr));
		entity.setEndHour(Time.valueOf(endHourStr));
		entity.setTotal(request.getTotal());
		entity.setStatus(EnumAppointmentStatus.PENDING.toString());
		entity.setObservation(request.getObservation());
		entity.setCreatedAt(now);
		entity.setUpdatedAt(now);

		repositoryAppointment.save(entity);

		if (request.getDetails() != null && !request.getDetails().isEmpty()) {
			List<EntityAppointmentDetail> listDetail = new ArrayList<>();
			for (var detail : request.getDetails()) {
				EntityAppointmentDetail entityDetail = new EntityAppointmentDetail();
				entityDetail.setIdAppointmentDetail(UUID.randomUUID().toString());
				entityDetail.setIdAppointment(entity.getIdAppointment());
				entityDetail.setIdService(detail.getIdService());
				entityDetail.setPrice(detail.getPrice());
				entityDetail.setCreatedAt(now);
				entityDetail.setUpdatedAt(now);
				listDetail.add(entityDetail);
			}
			repositoryAppointmentDetail.saveAll(listDetail);
		}

		response.idAppointment = entity.getIdAppointment();
		response.success();
		response.listMessage.add("Reserva registrada correctamente.");
		return response;
	}

	public ResponseAppointmentUpdate update(RequestAppointmentUpdate request) {
		ResponseAppointmentUpdate response = new ResponseAppointmentUpdate();

		Optional<EntityAppointment> optional = repositoryAppointment.findById(request.getIdAppointment());
		if (optional.isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		EntityAppointment entity = optional.get();

		// Solo actualizar fecha/hora si vienen como cadenas válidas
		try {
			if (request.getAppointmentDate() != null && request.getAppointmentDate().matches("\\d{4}-\\d{2}-\\d{2}")) {
				entity.setAppointmentDate(Date.valueOf(request.getAppointmentDate()));
			}
		} catch (Exception ignored) {}

		try {
			String startHourStr = request.getStartHour();
			if (startHourStr != null && startHourStr.matches("\\d{2}:\\d{2}(:\\d{2})?")) {
				if (startHourStr.length() == 5) startHourStr += ":00";
				entity.setStartHour(Time.valueOf(startHourStr));
			}
		} catch (Exception ignored) {}

		try {
			String endHourStr = request.getEndHour();
			if (endHourStr != null && endHourStr.matches("\\d{2}:\\d{2}(:\\d{2})?")) {
				if (endHourStr.length() == 5) endHourStr += ":00";
				entity.setEndHour(Time.valueOf(endHourStr));
			}
		} catch (Exception ignored) {}

		if (request.getStatus() != null) {
			entity.setStatus(request.getStatus());
		}
		entity.setObservation(request.getObservation());
		entity.setUpdatedAt(new java.util.Date());

		repositoryAppointment.save(entity);

		// Notificación por SMS al confirmar
		// Notificación por SMS al confirmar
		try {
			System.out.println("[DEBUG-NOTIFICACION] Estado recibido: " + request.getStatus());
			System.out.println("[DEBUG-NOTIFICACION] ID Cliente: " + entity.getIdCustomer());
			
			if ("Confirmada".equalsIgnoreCase(request.getStatus()) && entity.getIdCustomer() != null) {
				Optional<EntityCustomer> optCustomer = repositoryCustomer.findById(entity.getIdCustomer());
				if (optCustomer.isPresent()) {
					EntityCustomer customer = optCustomer.get();
					String dateStr = entity.getAppointmentDate() != null ? entity.getAppointmentDate().toString() : "";
					String timeStr = entity.getStartHour() != null ? entity.getStartHour().toString().substring(0, 5) : "";

					if (customer.getPhone() != null && !customer.getPhone().trim().isEmpty()) {
						twilioService.sendConfirmationSms(customer.getPhone(), customer.getFirstName(), dateStr, timeStr);
					} else {
						System.out.println("[TWILIO] Cliente " + customer.getFirstName() + " no tiene teléfono registrado.");
					}
				} else {
					System.out.println("[TWILIO] No se encontro el cliente en la BD con ID: " + entity.getIdCustomer());
				}
			}

		} catch (Exception e) {
			System.err.println("[TWILIO] Error al procesar notificación: " + e.getMessage());
		}

		response.success();
		response.listMessage.add("Reserva actualizada correctamente.");
		return response;
	}

	public ResponseAppointmentDelete delete(String idAppointment) {
		ResponseAppointmentDelete response = new ResponseAppointmentDelete();

		Optional<EntityAppointment> optional = repositoryAppointment.findById(idAppointment);
		if (optional.isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		EntityAppointment entity = optional.get();
		repositoryAppointment.delete(entity);

		response.success();
		response.listMessage.add("Reserva cancelada correctamente.");
		return response;
	}

	public ResponseAppointmentGetAll getall() {
		ResponseAppointmentGetAll response = new ResponseAppointmentGetAll();
		response.listAppointment = repositoryAppointment.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}

	public ResponseAppointmentGetOne getone(String idAppointment) {
		ResponseAppointmentGetOne response = new ResponseAppointmentGetOne();

		Optional<EntityAppointment> optional = repositoryAppointment.findById(idAppointment);
		if (optional.isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		response.appointment = optional.get();
		response.success();
		response.listMessage.add("Reserva obtenida correctamente.");
		return response;
	}

	// Barbero: ver solo sus citas
	public ResponseAppointmentGetAll getbybarber(String idUser) {
		ResponseAppointmentGetAll response = new ResponseAppointmentGetAll();
		response.listAppointment = repositoryAppointment.findByIdUser(idUser);
		response.success();
		response.listMessage.add("Agenda obtenida correctamente.");
		return response;
	}
}
