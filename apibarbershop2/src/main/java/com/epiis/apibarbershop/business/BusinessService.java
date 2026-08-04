package com.epiis.apibarbershop.business;

import java.util.Date;
import java.math.BigDecimal;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestServiceInsert;
import com.epiis.apibarbershop.dto.request.RequestServiceUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityService;
import com.epiis.apibarbershop.generic.ResponseGeneric;
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

		if (!validateServiceFields(request.getName(), request.getPrice(), request.getDurationMinutes(), response)) {
			return response;
		}
		if (repositoryService.findByName(request.getName().trim()).isPresent()) {
			response.listMessage.add("Ya existe un servicio con ese nombre.");
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

		if (!validateServiceFields(request.getName(), request.getPrice(), request.getDurationMinutes(), response)) {
			return response;
		}
		Optional<EntityService> optName = repositoryService.findByName(request.getName().trim());
		if (optName.isPresent() && !optName.get().getIdService().equals(entity.getIdService())) {
			response.listMessage.add("Ya existe otro servicio con ese nombre.");
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

	private boolean validateServiceFields(String name, BigDecimal price, Integer durationMinutes, ResponseGeneric response) {
		if (name == null || name.trim().isEmpty()) {
			response.listMessage.add("El nombre del servicio es obligatorio.");
			return false;
		}
		if (price == null || price.compareTo(BigDecimal.ZERO) <= 0) {
			response.listMessage.add("El precio debe ser mayor a 0.");
			return false;
		}
		if (price.compareTo(new BigDecimal("1000")) > 0) {
			response.listMessage.add("El precio máximo permitido es 1000.");
			return false;
		}
		if (durationMinutes == null || durationMinutes <= 0) {
			response.listMessage.add("La duración debe ser mayor a 0 minutos.");
			return false;
		}
		if (durationMinutes > 300) {
			response.listMessage.add("La duración máxima permitida es de 300 minutos (5 horas).");
			return false;
		}
		return true;
	}

	public ResponseServiceDelete delete(String idService) {
		ResponseServiceDelete response = new ResponseServiceDelete();

		Optional<EntityService> optional = repositoryService.findById(idService);
		if (optional.isEmpty()) {
			response.listMessage.add("Servicio no encontrado.");
			return response;
		}

		EntityService entity = optional.get();
		repositoryService.delete(entity);

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
