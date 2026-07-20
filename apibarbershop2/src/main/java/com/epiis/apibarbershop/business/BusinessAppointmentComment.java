package com.epiis.apibarbershop.business;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestAppointmentCommentInsert;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentInsert;
import com.epiis.apibarbershop.entity.EntityAppointmentComment;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentComment;
import com.epiis.apibarbershop.repository.RepositoryUser;

@Service
public class BusinessAppointmentComment {

	private final RepositoryAppointmentComment repositoryAppointmentComment;
	private final RepositoryAppointment repositoryAppointment;
	private final RepositoryUser repositoryUser;

	public BusinessAppointmentComment(
			RepositoryAppointmentComment repositoryAppointmentComment,
			RepositoryAppointment repositoryAppointment,
			RepositoryUser repositoryUser) {
		this.repositoryAppointmentComment = repositoryAppointmentComment;
		this.repositoryAppointment = repositoryAppointment;
		this.repositoryUser = repositoryUser;
	}

	public ResponseAppointmentCommentInsert insert(RequestAppointmentCommentInsert request) {
		ResponseAppointmentCommentInsert response = new ResponseAppointmentCommentInsert();

		// Validar que la reserva existe
		if (repositoryAppointment.findById(request.getIdAppointment()).isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		// Validar que el usuario (admin/barbero) existe
		if (repositoryUser.findById(request.getIdUser()).isEmpty()) {
			response.listMessage.add("Usuario no encontrado.");
			return response;
		}

		// Validar descripción no vacía
		if (request.getDescription() == null || request.getDescription().isBlank()) {
			response.listMessage.add("El comentario no puede estar vacío.");
			return response;
		}

		Date now = new Date();

		EntityAppointmentComment entity = new EntityAppointmentComment();
		entity.setIdAppointmentComment(UUID.randomUUID().toString());
		entity.setIdAppointment(request.getIdAppointment());
		entity.setIdUser(request.getIdUser());
		entity.setDescription(request.getDescription().trim());
		entity.setCreatedAt(now);
		entity.setUpdatedAt(now);

		repositoryAppointmentComment.save(entity);

		response.success();
		response.listMessage.add("Comentario registrado correctamente.");
		return response;
	}

	public ResponseAppointmentCommentGetAll getByAppointment(String idAppointment) {
		ResponseAppointmentCommentGetAll response = new ResponseAppointmentCommentGetAll();

		if (repositoryAppointment.findById(idAppointment).isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		response.listComment = repositoryAppointmentComment.findByIdAppointment(idAppointment);
		response.success();
		response.listMessage.add("Comentarios obtenidos correctamente.");
		return response;
	}
}
