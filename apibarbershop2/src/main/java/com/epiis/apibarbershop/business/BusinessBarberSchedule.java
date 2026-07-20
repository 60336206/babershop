package com.epiis.apibarbershop.business;

import java.sql.Time;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestBarberScheduleInsert;
import com.epiis.apibarbershop.dto.request.RequestBarberScheduleUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityBarberSchedule;
import com.epiis.apibarbershop.repository.RepositoryBarberSchedule;
import com.epiis.apibarbershop.staticdata.EnumStatus;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.DayOfWeek;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.util.Locale;
import java.util.ArrayList;
import java.util.List;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.generic.ResponseGeneric;

@Service
public class BusinessBarberSchedule {
	private final RepositoryBarberSchedule repositoryBarberSchedule;
	private final RepositoryAppointment repositoryAppointment;

	public BusinessBarberSchedule(RepositoryBarberSchedule repositoryBarberSchedule, RepositoryAppointment repositoryAppointment) {
		this.repositoryBarberSchedule = repositoryBarberSchedule;
		this.repositoryAppointment = repositoryAppointment;
	}

	public ResponseBarberScheduleInsert insert(RequestBarberScheduleInsert request) {
		ResponseBarberScheduleInsert response = new ResponseBarberScheduleInsert();

		if (request.getIdUser() == null || request.getIdUser().trim().isEmpty()) {
			response.listMessage.add("El barbero es obligatorio.");
			return response;
		}

		if (request.getDayName() == null || request.getDayName().trim().isEmpty()) {
			response.listMessage.add("El día es obligatorio.");
			return response;
		}

		Time start = Time.valueOf(request.getStartHour());
		Time end = Time.valueOf(request.getEndHour());

		if (start.compareTo(end) >= 0) {
			response.listMessage.add("La hora de inicio debe ser anterior a la hora de fin.");
			return response;
		}

		if (!repositoryBarberSchedule.findByIdUserAndDayName(request.getIdUser(), request.getDayName()).isEmpty()) {
			response.listMessage.add("Este barbero ya tiene un horario asignado para el " + request.getDayName() + ".");
			return response;
		}

		EntityBarberSchedule entity = new EntityBarberSchedule();
		entity.setIdBarberSchedule(UUID.randomUUID().toString());
		entity.setIdUser(request.getIdUser());
		entity.setDayName(request.getDayName());
		entity.setStartHour(start);
		entity.setEndHour(end);
		entity.setStatus(EnumStatus.ACTIVE.getValue());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryBarberSchedule.save(entity);

		response.success();
		response.listMessage.add("Horario registrado correctamente.");
		return response;
	}

	public ResponseBarberScheduleUpdate update(RequestBarberScheduleUpdate request) {
		ResponseBarberScheduleUpdate response = new ResponseBarberScheduleUpdate();

		Optional<EntityBarberSchedule> optional = repositoryBarberSchedule.findById(request.getIdBarberSchedule());
		if (optional.isEmpty()) {
			response.listMessage.add("Horario no encontrado.");
			return response;
		}

		EntityBarberSchedule entity = optional.get();

		if (request.getDayName() == null || request.getDayName().trim().isEmpty()) {
			response.listMessage.add("El día es obligatorio.");
			return response;
		}

		Time start = Time.valueOf(request.getStartHour());
		Time end = Time.valueOf(request.getEndHour());

		if (start.compareTo(end) >= 0) {
			response.listMessage.add("La hora de inicio debe ser anterior a la hora de fin.");
			return response;
		}

		List<EntityBarberSchedule> existingList = repositoryBarberSchedule.findByIdUserAndDayName(entity.getIdUser(), request.getDayName());
		if (!existingList.isEmpty() && !existingList.get(0).getIdBarberSchedule().equals(entity.getIdBarberSchedule())) {
			response.listMessage.add("Este barbero ya tiene un horario asignado para el " + request.getDayName() + ".");
			return response;
		}

		entity.setDayName(request.getDayName());
		entity.setStartHour(start);
		entity.setEndHour(end);
		entity.setUpdatedAt(new Date());

		repositoryBarberSchedule.save(entity);

		response.success();
		response.listMessage.add("Horario actualizado correctamente.");
		return response;
	}

	public ResponseBarberScheduleDelete delete(String idBarberSchedule) {
		ResponseBarberScheduleDelete response = new ResponseBarberScheduleDelete();

		Optional<EntityBarberSchedule> optional = repositoryBarberSchedule.findById(idBarberSchedule);
		if (optional.isEmpty()) {
			response.listMessage.add("Horario no encontrado.");
			return response;
		}

		EntityBarberSchedule entity = optional.get();
		entity.setStatus(EnumStatus.INACTIVE.getValue());
		entity.setUpdatedAt(new Date());
		repositoryBarberSchedule.save(entity);

		response.success();
		response.listMessage.add("Horario eliminado correctamente.");
		return response;
	}

	public ResponseBarberScheduleGetAll getall() {
		ResponseBarberScheduleGetAll response = new ResponseBarberScheduleGetAll();
		response.listBarberSchedule = repositoryBarberSchedule.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}

	public ResponseBarberScheduleGetAll getbybarber(String idUser) {
		ResponseBarberScheduleGetAll response = new ResponseBarberScheduleGetAll();
		response.listBarberSchedule = repositoryBarberSchedule.findByIdUser(idUser);
		response.success();
		response.listMessage.add("Horarios del barbero obtenidos correctamente.");
		return response;
	}

	public ResponseAvailableHours getAvailableHours(String idUser, String dateStr) {
		ResponseAvailableHours response = new ResponseAvailableHours();
		try {
			LocalDate date = LocalDate.parse(dateStr, DateTimeFormatter.ISO_LOCAL_DATE);
			String dayName = date.getDayOfWeek().getDisplayName(TextStyle.FULL, new Locale("es", "ES"));
			// Capitalize first letter to match "Lunes", "Martes"
			dayName = dayName.substring(0, 1).toUpperCase() + dayName.substring(1);

			List<EntityBarberSchedule> listSchedule = repositoryBarberSchedule.findByIdUserAndDayName(idUser, dayName);
			if (listSchedule.isEmpty()) {
				response.listMessage.add("El barbero no trabaja este día.");
				return response; // Success=false, no hours
			}

			EntityBarberSchedule schedule = listSchedule.get(0);
			LocalTime start = schedule.getStartHour().toLocalTime();
			LocalTime end = schedule.getEndHour().toLocalTime();

			List<EntityAppointment> appointments = repositoryAppointment.findByIdUserAndAppointmentDate(idUser, java.sql.Date.valueOf(date));

			List<String> availableHours = new ArrayList<>();
			LocalTime current = start;

			while (current.plusMinutes(30).isBefore(end) || current.plusMinutes(30).equals(end)) {
				final LocalTime slotTime = current;
				// Chequear si este slot está ocupado por alguna cita (que empiece a la misma hora, o caiga dentro)
				boolean isOccupied = appointments.stream().anyMatch(app -> {
					LocalTime appStart = app.getStartHour().toLocalTime();
					LocalTime appEnd = app.getEndHour().toLocalTime();
					// Para simplificar: asumimos que las citas duran múltiplos de 30 min y si el slot cae dentro del intervalo de la cita, está ocupado.
					return (slotTime.equals(appStart) || (slotTime.isAfter(appStart) && slotTime.isBefore(appEnd)));
				});

				if (!isOccupied) {
					availableHours.add(current.format(DateTimeFormatter.ofPattern("HH:mm")));
				}
				current = current.plusMinutes(30);
			}

			response.listAvailableHours = availableHours;
			response.success();
			response.listMessage.add("Horas disponibles obtenidas.");
		} catch (Exception e) {
			response.listMessage.add("Error al obtener horas: " + e.getMessage());
		}
		return response;
	}
}
