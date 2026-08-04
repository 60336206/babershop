package com.epiis.apibarbershop.business;

import lombok.extern.slf4j.Slf4j;
import com.epiis.apibarbershop.generic.ValidationConstants;
import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

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
@Slf4j
@SuppressWarnings("all")
public class BusinessAppointment {
	private static final Logger log = LoggerFactory.getLogger(BusinessAppointment.class);
	private static final String APPOINTMENT_NOT_FOUND = ValidationConstants.MSG_APPOINTMENT_NOT_FOUND;
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

		if (!isAppointmentDateValid(apptDate, apptStart, response)
				|| !isWithinBusinessHours(apptStart, apptEnd, response)
				|| hasOverlappingAppointment(request.getIdUser(), apptDate, apptStart, apptEnd, response)) {
			return response;
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

	private boolean isAppointmentDateValid(Date appointmentDate, Time startHour, ResponseAppointmentInsert response) {
		java.time.LocalDate today = java.time.LocalDate.now();
		java.time.LocalDate scheduledDate = appointmentDate.toLocalDate();
		if (scheduledDate.isBefore(today)) {
			response.listMessage.add("No se pueden reservar citas en el pasado.");
			return false;
		}
		if (scheduledDate.isAfter(today.plusDays(365))) {
			response.listMessage.add("No se pueden reservar citas con más de 365 días de anticipación.");
			return false;
		}
		if (scheduledDate.isEqual(today) && startHour.toLocalTime().isBefore(java.time.LocalTime.now())) {
			response.listMessage.add("La hora de la cita ya ha pasado el día de hoy.");
			return false;
		}
		return true;
	}

	private boolean isWithinBusinessHours(Time startHour, Time endHour, ResponseAppointmentInsert response) {
		List<EntitySetting> settings = repositorySetting.findAll();
		if (settings.isEmpty()) {
			return true;
		}

		EntitySetting setting = settings.get(0);
		if (startHour.before(setting.getOpenHour()) || endHour.after(setting.getCloseHour())) {
			response.listMessage.add("La cita está fuera del horario de atención del negocio (" + setting.getOpenHour() + " - " + setting.getCloseHour() + ").");
			return false;
		}
		return true;
	}

	private boolean hasOverlappingAppointment(String idUser, Date appointmentDate, Time startHour, Time endHour,
			ResponseAppointmentInsert response) {
		List<EntityAppointment> existingAppointments = repositoryAppointment.findByIdUserAndAppointmentDate(idUser, appointmentDate);
		for (EntityAppointment existing : existingAppointments) {
			boolean isCancelled = EnumAppointmentStatus.CANCELLED.toString().equals(existing.getStatus());
			boolean overlaps = startHour.before(existing.getEndHour()) && existing.getStartHour().before(endHour);
			if (!isCancelled && overlaps) {
				response.listMessage.add("El barbero ya tiene una cita ocupada en ese horario.");
				return true;
			}
		}
		return false;
	}

	public ResponseAppointmentUpdate update(RequestAppointmentUpdate request) {
		ResponseAppointmentUpdate response = new ResponseAppointmentUpdate();

		Optional<EntityAppointment> optional = repositoryAppointment.findById(request.getIdAppointment());
		if (optional.isEmpty()) {
			response.listMessage.add(APPOINTMENT_NOT_FOUND);
			return response;
		}

		EntityAppointment entity = optional.get();

		if (!updateAppointmentSchedule(request, entity, response)) {
			return response;
		}

		applyRequestValues(request, entity);

		repositoryAppointment.save(entity);

		sendConfirmationNotification(request.getStatus(), entity);

		response.success();
		response.listMessage.add("Reserva actualizada correctamente.");
		return response;
	}

	private boolean updateAppointmentSchedule(RequestAppointmentUpdate request, EntityAppointment entity,
			ResponseAppointmentUpdate response) {
		AppointmentSchedule schedule = getRequestedSchedule(request, entity);
		if (!schedule.changed()) {
			return true;
		}
		if (!isUpdatedDateValid(schedule, response) || !isWithinUpdatedBusinessHours(schedule, response)
				|| hasOverlappingAppointment(entity, schedule, response)) {
			return false;
		}
		entity.setAppointmentDate(schedule.date());
		entity.setStartHour(schedule.startHour());
		entity.setEndHour(schedule.endHour());
		return true;
	}

	private AppointmentSchedule getRequestedSchedule(RequestAppointmentUpdate request, EntityAppointment entity) {
		Date date = request.getAppointmentDate() != null && request.getAppointmentDate().matches("\\d{4}-\\d{2}-\\d{2}")
				? Date.valueOf(request.getAppointmentDate()) : entity.getAppointmentDate();
		Time startHour = parseTime(request.getStartHour(), entity.getStartHour());
		Time endHour = parseTime(request.getEndHour(), entity.getEndHour());
		boolean changed = request.getAppointmentDate() != null || request.getStartHour() != null || request.getEndHour() != null;
		return new AppointmentSchedule(date, startHour, endHour, changed);
	}

	private Time parseTime(String value, Time defaultValue) {
		if (value == null || !value.matches("\\d{2}:\\d{2}(:\\d{2})?")) {
			return defaultValue;
		}
		return Time.valueOf(value.length() == 5 ? value + ":00" : value);
	}

	private boolean isUpdatedDateValid(AppointmentSchedule schedule, ResponseAppointmentUpdate response) {
		java.time.LocalDate today = java.time.LocalDate.now();
		java.time.LocalDate appointmentDate = schedule.date().toLocalDate();
		if (appointmentDate.isBefore(today)) {
			response.listMessage.add("No se pueden mover citas al pasado.");
			return false;
		}
		if (appointmentDate.isAfter(today.plusDays(365))) {
			response.listMessage.add("No se pueden mover citas con más de 365 días de anticipación.");
			return false;
		}
		if (appointmentDate.isEqual(today) && schedule.startHour().toLocalTime().isBefore(java.time.LocalTime.now())) {
			response.listMessage.add("La hora seleccionada ya ha pasado el día de hoy.");
			return false;
		}
		return true;
	}

	private boolean isWithinUpdatedBusinessHours(AppointmentSchedule schedule, ResponseAppointmentUpdate response) {
		List<EntitySetting> settings = repositorySetting.findAll();
		if (settings.isEmpty()) {
			return true;
		}
		EntitySetting setting = settings.get(0);
		if (schedule.startHour().before(setting.getOpenHour()) || schedule.endHour().after(setting.getCloseHour())) {
			response.listMessage.add("La cita está fuera del horario de atención del negocio.");
			return false;
		}
		return true;
	}

	private boolean hasOverlappingAppointment(EntityAppointment entity, AppointmentSchedule schedule,
			ResponseAppointmentUpdate response) {
		for (EntityAppointment existing : repositoryAppointment.findByIdUserAndAppointmentDate(entity.getIdUser(), schedule.date())) {
			boolean overlaps = schedule.startHour().before(existing.getEndHour()) && existing.getStartHour().before(schedule.endHour());
			if (!existing.getIdAppointment().equals(entity.getIdAppointment())
					&& !EnumAppointmentStatus.CANCELLED.toString().equals(existing.getStatus()) && overlaps) {
				response.listMessage.add("El barbero ya tiene una cita ocupada en ese nuevo horario.");
				return true;
			}
		}
		return false;
	}

	private void applyRequestValues(RequestAppointmentUpdate request, EntityAppointment entity) {
		if (request.getStatus() != null) entity.setStatus(request.getStatus());
		if (request.getPaymentStatus() != null) entity.setPaymentStatus(request.getPaymentStatus());
		if (request.getPaymentMethod() != null) entity.setPaymentMethod(request.getPaymentMethod());
		entity.setObservation(request.getObservation());
		entity.setUpdatedAt(new java.util.Date());
	}

	private void sendConfirmationNotification(String status, EntityAppointment entity) {
		if (!"Confirmada".equalsIgnoreCase(status) || entity.getIdCustomer() == null) return;
		try {
			repositoryCustomer.findById(entity.getIdCustomer()).ifPresentOrElse(
					customer -> sendSmsToCustomer(customer, entity),
					() -> log.warn("No se encontró el cliente en la base de datos con ID: {}", entity.getIdCustomer()));
		} catch(Exception e) {
			log.error("Error al procesar la notificación de la reserva.", e);
		}
	}

	private void sendSmsToCustomer(EntityCustomer customer, EntityAppointment appointment) {
		if (customer.getPhone() == null || customer.getPhone().trim().isEmpty()) {
			log.warn("El cliente {} no tiene teléfono registrado.", customer.getFirstName());
			return;
		}
		twilioService.sendConfirmationSms(customer.getPhone(), customer.getFirstName(),
				appointment.getAppointmentDate().toString(), appointment.getStartHour().toString().substring(0, 5));
	}

	private record AppointmentSchedule(Date date, Time startHour, Time endHour, boolean changed) { }

	public ResponseAppointmentDelete delete(String idAppointment) {
		ResponseAppointmentDelete response = new ResponseAppointmentDelete();

		Optional<EntityAppointment> optional = repositoryAppointment.findById(idAppointment);
		if (optional.isEmpty()) {
			response.listMessage.add(APPOINTMENT_NOT_FOUND);
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
			response.listMessage.add(APPOINTMENT_NOT_FOUND);
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
