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
import com.epiis.apibarbershop.staticdata.EnumAppointmentStatus;

@Service
public class BusinessAppointment {
	private final RepositoryAppointment repositoryAppointment;
	private final RepositoryAppointmentDetail repositoryAppointmentDetail;

	public BusinessAppointment(
		RepositoryAppointment repositoryAppointment,
		RepositoryAppointmentDetail repositoryAppointmentDetail) {
		this.repositoryAppointment = repositoryAppointment;
		this.repositoryAppointmentDetail = repositoryAppointmentDetail;
	}

	public ResponseAppointmentInsert insert(RequestAppointmentInsert request) {
		ResponseAppointmentInsert response = new ResponseAppointmentInsert();

		java.util.Date now = new java.util.Date();

		EntityAppointment entity = new EntityAppointment();
		entity.setIdAppointment(UUID.randomUUID().toString());
		entity.setIdCustomer(request.getIdCustomer());
		entity.setIdUser(request.getIdUser());
		entity.setAppointmentDate(Date.valueOf(request.getAppointmentDate()));
		entity.setStartHour(Time.valueOf(request.getStartHour()));
		entity.setEndHour(Time.valueOf(request.getEndHour()));
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
		entity.setAppointmentDate(Date.valueOf(request.getAppointmentDate()));
		entity.setStartHour(Time.valueOf(request.getStartHour()));
		entity.setEndHour(Time.valueOf(request.getEndHour()));
		entity.setStatus(request.getStatus());
		entity.setObservation(request.getObservation());
		entity.setUpdatedAt(new java.util.Date());

		repositoryAppointment.save(entity);

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
		entity.setStatus(EnumAppointmentStatus.CANCELLED.toString());
		entity.setUpdatedAt(new java.util.Date());
		repositoryAppointment.save(entity);

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
