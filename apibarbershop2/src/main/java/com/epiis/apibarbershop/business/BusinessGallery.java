package com.epiis.apibarbershop.business;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestGalleryInsert;
import com.epiis.apibarbershop.dto.request.RequestGalleryUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityGallery;
import com.epiis.apibarbershop.repository.RepositoryGallery;

@Service
public class BusinessGallery {
	private final RepositoryGallery repositoryGallery;

	public BusinessGallery(RepositoryGallery repositoryGallery) {
		this.repositoryGallery = repositoryGallery;
	}

	public ResponseGalleryInsert insert(RequestGalleryInsert request) {
		ResponseGalleryInsert response = new ResponseGalleryInsert();

		EntityGallery entity = new EntityGallery();
		entity.setIdGallery(UUID.randomUUID().toString());
		entity.setTitle(request.getTitle());
		entity.setImage(request.getImage());
		entity.setDescription(request.getDescription());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryGallery.save(entity);

		response.success();
		response.listMessage.add("Imagen registrada correctamente.");
		return response;
	}

	public ResponseGalleryUpdate update(RequestGalleryUpdate request) {
		ResponseGalleryUpdate response = new ResponseGalleryUpdate();

		Optional<EntityGallery> optional = repositoryGallery.findById(request.getIdGallery());
		if (optional.isEmpty()) {
			response.listMessage.add("Imagen no encontrada.");
			return response;
		}

		EntityGallery entity = optional.get();
		entity.setTitle(request.getTitle());
		entity.setImage(request.getImage());
		entity.setDescription(request.getDescription());
		entity.setUpdatedAt(new Date());

		repositoryGallery.save(entity);

		response.success();
		response.listMessage.add("Imagen actualizada correctamente.");
		return response;
	}

	public ResponseGalleryDelete delete(String idGallery) {
		ResponseGalleryDelete response = new ResponseGalleryDelete();

		Optional<EntityGallery> optional = repositoryGallery.findById(idGallery);
		if (optional.isEmpty()) {
			response.listMessage.add("Imagen no encontrada.");
			return response;
		}

		repositoryGallery.deleteById(idGallery);

		response.success();
		response.listMessage.add("Imagen eliminada correctamente.");
		return response;
	}

	public ResponseGalleryGetAll getall() {
		ResponseGalleryGetAll response = new ResponseGalleryGetAll();
		response.listGallery = repositoryGallery.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}
}
