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
import com.epiis.apibarbershop.repository.RepositorySetting;
import com.epiis.apibarbershop.service.TwilioService;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.entity.EntitySetting;
import com.epiis.apibarbershop.staticdata.EnumAppointmentStatus;

@Service
public class BusinessAppointment {
	private final RepositoryAppointment repositoryAppointment;
	private final RepositoryAppointmentDetail repositoryAppointmentDetail;
	private final RepositoryCustomer repositoryCustomer;
	private final RepositorySetting repositorySetting;
	private final TwilioService twilioService;

	public BusinessAppointment(
		RepositoryAppointment repositoryAppointment,
		RepositoryAppointmentDetail repositoryAppointmentDetail,
		RepositoryCustomer repositoryCustomer,
		RepositorySetting repositorySetting,
		TwilioService twilioService) {
		this.repositoryAppointment = repositoryAppointment;
		this.repositoryAppointmentDetail = repositoryAppointmentDetail;
		this.repositoryCustomer = repositoryCustomer;
		this.repositorySetting = repositorySetting;
		this.twilioService = twilioService;
	}

	public ResponseAppointmentInsert insert(RequestAppointmentInsert request) {
		ResponseAppointmentInsert response = new ResponseAppointmentInsert();

		java.util.Date now = new java.util.Date();

		String startHourStr = request.getStartHour();
		if (startHourStr != null && startHourStr.length() == 5) startHourStr += ":00";

		String endHourStr = request.getEndHour();
		if (endHourStr != null && endHourStr.length() == 5) endHourStr += ":00";

		Date apptDate = Date.valueOf(request.getAppointmentDate());
		Time apptStart = Time.valueOf(startHourStr);
		Time apptEnd = Time.valueOf(endHourStr);

		// 1. & 2. Validaciones de Fecha (Pasado y Futuro Máximo 365 días)
		java.time.LocalDate localNow = java.time.LocalDate.now();
		java.time.LocalDate localAppt = apptDate.toLocalDate();
		
		if (localAppt.isBefore(localNow)) {
			response.listMessage.add("No se pueden reservar citas en el pasado.");
			return response;
		}
		if (localAppt.isAfter(localNow.plusDays(365))) {
			response.listMessage.add("No se pueden reservar citas con más de 365 días de anticipación.");
			return response;
		}
		if (localAppt.isEqual(localNow)) {
			java.time.LocalTime localTimeNow = java.time.LocalTime.now();
			if (apptStart.toLocalTime().isBefore(localTimeNow)) {
				response.listMessage.add("La hora de la cita ya ha pasado el día de hoy.");
				return response;
			}
		}

		// 3. Validación de Horario Comercial
		List<EntitySetting> settings = repositorySetting.findAll();
		if (!settings.isEmpty()) {
			EntitySetting setting = settings.get(0);
			if (apptStart.before(setting.getOpenHour()) || apptEnd.after(setting.getCloseHour())) {
				response.listMessage.add("La cita está fuera del horario de atención del negocio (" + setting.getOpenHour() + " - " + setting.getCloseHour() + ").");
				return response;
			}
		}

		// 4. Anti-Cruce de Citas
		List<EntityAppointment> existingAppts = repositoryAppointment.findByIdUserAndAppointmentDate(request.getIdUser(), apptDate);
		for (EntityAppointment existing : existingAppts) {
			if (!existing.getStatus().equals(EnumAppointmentStatus.CANCELLED.toString())) {
				// Verifica cruce: (start1 < end2) && (start2 < end1)
				if (apptStart.before(existing.getEndHour()) && existing.getStartHour().before(apptEnd)) {
					response.listMessage.add("El barbero ya tiene una cita ocupada en ese horario.");
					return response;
				}
			}
		}

		EntityAppointment entity = new EntityAppointment();
		entity.setIdAppointment(UUID.randomUUID().toString());
		entity.setIdCustomer(request.getIdCustomer());
		entity.setIdUser(request.getIdUser());
		entity.setAppointmentDate(Date.valueOf(request.getAppointmentDate()));
		entity.setStartHour(Time.valueOf(startHourStr));
		entity.setEndHour(Time.valueOf(endHourStr));
		entity.setTotal(request.getTotal());
		entity.setStatus(EnumAppointmentStatus.PENDING.toString());
		entity.setPaymentStatus("Pendiente");
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

		// Solo actualizar fecha/hora y validar si vienen en la petición
		boolean dateChanged = false;
		Date newDate = entity.getAppointmentDate();
		Time newStart = entity.getStartHour();
		Time newEnd = entity.getEndHour();

		try {
			if (request.getAppointmentDate() != null && request.getAppointmentDate().matches("\\d{4}-\\d{2}-\\d{2}")) {
				newDate = Date.valueOf(request.getAppointmentDate());
				dateChanged = true;
			}
			String startHourStr = request.getStartHour();
			if (startHourStr != null && startHourStr.matches("\\d{2}:\\d{2}(:\\d{2})?")) {
				if (startHourStr.length() == 5) startHourStr += ":00";
				newStart = Time.valueOf(startHourStr);
				dateChanged = true;
			}
			String endHourStr = request.getEndHour();
			if (endHourStr != null && endHourStr.matches("\\d{2}:\\d{2}(:\\d{2})?")) {
				if (endHourStr.length() == 5) endHourStr += ":00";
				newEnd = Time.valueOf(endHourStr);
				dateChanged = true;
			}
		} catch (Exception ignored) {}

		if (dateChanged && newDate != null && newStart != null && newEnd != null) {
			java.time.LocalDate localNow = java.time.LocalDate.now();
			java.time.LocalDate localAppt = newDate.toLocalDate();
			
			if (localAppt.isBefore(localNow)) {
				response.listMessage.add("No se pueden mover citas al pasado.");
				return response;
			}
			if (localAppt.isAfter(localNow.plusDays(365))) {
				response.listMessage.add("No se pueden mover citas con más de 365 días de anticipación.");
				return response;
			}
			if (localAppt.isEqual(localNow)) {
				java.time.LocalTime localTimeNow = java.time.LocalTime.now();
				if (newStart.toLocalTime().isBefore(localTimeNow)) {
					response.listMessage.add("La hora seleccionada ya ha pasado el día de hoy.");
					return response;
				}
			}

			List<EntitySetting> settings = repositorySetting.findAll();
			if (!settings.isEmpty()) {
				EntitySetting setting = settings.get(0);
				if (newStart.before(setting.getOpenHour()) || newEnd.after(setting.getCloseHour())) {
					response.listMessage.add("La cita está fuera del horario de atención del negocio.");
					return response;
				}
			}

			List<EntityAppointment> existingAppts = repositoryAppointment.findByIdUserAndAppointmentDate(entity.getIdUser(), newDate);
			for (EntityAppointment existing : existingAppts) {
				if (!existing.getIdAppointment().equals(entity.getIdAppointment()) && !existing.getStatus().equals(EnumAppointmentStatus.CANCELLED.toString())) {
					if (newStart.before(existing.getEndHour()) && existing.getStartHour().before(newEnd)) {
						response.listMessage.add("El barbero ya tiene una cita ocupada en ese nuevo horario.");
						return response;
					}
				}
			}

			entity.setAppointmentDate(newDate);
			entity.setStartHour(newStart);
			entity.setEndHour(newEnd);
		}

		if (request.getStatus() != null) {
			entity.setStatus(request.getStatus());
		}
		if (request.getPaymentStatus() != null) {
			entity.setPaymentStatus(request.getPaymentStatus());
		}
		if (request.getPaymentMethod() != null) {
			entity.setPaymentMethod(request.getPaymentMethod());
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
