package com.epiis.apibarbershop.business;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestServiceInsert;
import com.epiis.apibarbershop.dto.request.RequestServiceUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityService;
import com.epiis.apibarbershop.repository.RepositoryService;
import com.epiis.apibarbershop.staticdata.EnumStatus;

@Service
public class BusinessService {
	private final RepositoryService repositoryService;

	public BusinessService(RepositoryService repositoryService) {
		this.repositoryService = repositoryService;
	}

	public ResponseServiceInsert insert(RequestServiceInsert request) {
		ResponseServiceInsert response = new ResponseServiceInsert();

		// 1. Validar Nombre
		if (request.getName() == null || request.getName().trim().isEmpty()) {
			response.listMessage.add("El nombre del servicio es obligatorio.");
			return response;
		}
		if (repositoryService.findByName(request.getName().trim()).isPresent()) {
			response.listMessage.add("Ya existe un servicio con ese nombre.");
			return response;
		}

		// 2. Validar Precio
		if (request.getPrice() == null || request.getPrice().compareTo(java.math.BigDecimal.ZERO) <= 0) {
			response.listMessage.add("El precio debe ser mayor a 0.");
			return response;
		}

		// 3. Validar Duración
		if (request.getDurationMinutes() == null || request.getDurationMinutes() <= 0) {
			response.listMessage.add("La duración debe ser mayor a 0 minutos.");
			return response;
		}

		EntityService entity = new EntityService();
		entity.setIdService(UUID.randomUUID().toString());
		entity.setName(request.getName().trim());
		entity.setDescription(request.getDescription());
		entity.setPrice(request.getPrice());
		entity.setDurationMinutes(request.getDurationMinutes());
		entity.setImage(request.getImage());
		entity.setStatus(EnumStatus.ACTIVE.getValue());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryService.save(entity);

		response.success();
		response.listMessage.add("Servicio registrado correctamente.");
		return response;
	}

	public ResponseServiceUpdate update(RequestServiceUpdate request) {
		ResponseServiceUpdate response = new ResponseServiceUpdate();

		Optional<EntityService> optional = repositoryService.findById(request.getIdService());
		if (optional.isEmpty()) {
			response.listMessage.add("Servicio no encontrado.");
			return response;
		}

		EntityService entity = optional.get();

		// 1. Validar Nombre
		if (request.getName() == null || request.getName().trim().isEmpty()) {
			response.listMessage.add("El nombre del servicio es obligatorio.");
			return response;
		}
		Optional<EntityService> optName = repositoryService.findByName(request.getName().trim());
		if (optName.isPresent() && !optName.get().getIdService().equals(entity.getIdService())) {
			response.listMessage.add("Ya existe otro servicio con ese nombre.");
			return response;
		}

		// 2. Validar Precio
		if (request.getPrice() == null || request.getPrice().compareTo(java.math.BigDecimal.ZERO) <= 0) {
			response.listMessage.add("El precio debe ser mayor a 0.");
			return response;
		}

		// 3. Validar Duración
		if (request.getDurationMinutes() == null || request.getDurationMinutes() <= 0) {
			response.listMessage.add("La duración debe ser mayor a 0 minutos.");
			return response;
		}

		entity.setName(request.getName().trim());
		entity.setDescription(request.getDescription());
		entity.setPrice(request.getPrice());
		entity.setDurationMinutes(request.getDurationMinutes());
		entity.setImage(request.getImage());
		if (request.getStatus() != null) {
			entity.setStatus(request.getStatus());
		}
		entity.setUpdatedAt(new Date());

		repositoryService.save(entity);

		response.success();
		response.listMessage.add("Servicio actualizado correctamente.");
		return response;
	}

	public ResponseServiceDelete delete(String idService) {
		ResponseServiceDelete response = new ResponseServiceDelete();

		Optional<EntityService> optional = repositoryService.findById(idService);
		if (optional.isEmpty()) {
			response.listMessage.add("Servicio no encontrado.");
			return response;
		}

		EntityService entity = optional.get();
		entity.setStatus(EnumStatus.INACTIVE.getValue());
		entity.setUpdatedAt(new Date());
		repositoryService.save(entity);

		response.success();
		response.listMessage.add("Servicio eliminado correctamente.");
		return response;
	}

	public ResponseServiceGetAll getall() {
		ResponseServiceGetAll response = new ResponseServiceGetAll();
		response.listService = repositoryService.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}

	public ResponseServiceGetOne getone(String idService) {
		ResponseServiceGetOne response = new ResponseServiceGetOne();

		Optional<EntityService> optional = repositoryService.findById(idService);
		if (optional.isEmpty()) {
			response.listMessage.add("Servicio no encontrado.");
			return response;
		}

		response.service = optional.get();
		response.success();
		response.listMessage.add("Servicio obtenido correctamente.");
		return response;
	}
}
