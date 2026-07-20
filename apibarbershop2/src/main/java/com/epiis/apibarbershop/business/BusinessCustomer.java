package com.epiis.apibarbershop.business;

import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestCustomerInsert;
import com.epiis.apibarbershop.dto.request.RequestCustomerUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.staticdata.EnumStatus;

@Service
public class BusinessCustomer {
	private final RepositoryCustomer repositoryCustomer;

	public BusinessCustomer(RepositoryCustomer repositoryCustomer) {
		this.repositoryCustomer = repositoryCustomer;
	}

	public ResponseCustomerInsert insert(RequestCustomerInsert request) {
		ResponseCustomerInsert response = new ResponseCustomerInsert();

		// 1. Validar Nombres y Apellidos
		if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
			response.listMessage.add("El nombre es obligatorio.");
			return response;
		}
		if (request.getSurName() == null || request.getSurName().trim().isEmpty()) {
			response.listMessage.add("El apellido es obligatorio.");
			return response;
		}

		// 2. Validar Teléfono (Obligatorio, numérico y longitud min)
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add("El teléfono es obligatorio.");
			return response;
		}
		if (!request.getPhone().matches("\\d{7,15}")) {
			response.listMessage.add("El teléfono debe contener entre 7 y 15 dígitos.");
			return response;
		}
		if (repositoryCustomer.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add("Ya existe un cliente con este teléfono.");
			return response;
		}

		// 3. Validar Email (Opcional, pero con formato y único si se ingresa)
		String email = request.getEmail() != null ? request.getEmail().trim() : "";
		if (!email.isEmpty()) {
			if (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$")) {
				response.listMessage.add("El formato del correo electrónico es inválido.");
				return response;
			}
			if (repositoryCustomer.findByEmail(email).isPresent()) {
				response.listMessage.add("Ya existe un cliente con este correo.");
				return response;
			}
		} else {
			email = null; // Guardar como nulo si vino vacío
		}

		EntityCustomer entity = new EntityCustomer();
		entity.setIdCustomer(UUID.randomUUID().toString());
		entity.setFirstName(request.getFirstName().trim());
		entity.setSurName(request.getSurName().trim());
		entity.setPhone(request.getPhone().trim());
		entity.setEmail(email);
		entity.setPassword(null); // El cliente NO inicia sesión
		entity.setStatus(EnumStatus.ACTIVE.getValue());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryCustomer.save(entity);

		response.idCustomer = entity.getIdCustomer();
		response.success();
		response.listMessage.add("Cliente registrado correctamente.");
		return response;
	}

	public ResponseCustomerUpdate update(RequestCustomerUpdate request) {
		ResponseCustomerUpdate response = new ResponseCustomerUpdate();

		Optional<EntityCustomer> optional = repositoryCustomer.findById(request.getIdCustomer());
		if (optional.isEmpty()) {
			response.listMessage.add("Cliente no encontrado.");
			return response;
		}

		EntityCustomer entity = optional.get();

		// 1. Validar Nombres y Apellidos
		if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
			response.listMessage.add("El nombre es obligatorio.");
			return response;
		}
		if (request.getSurName() == null || request.getSurName().trim().isEmpty()) {
			response.listMessage.add("El apellido es obligatorio.");
			return response;
		}

		// 2. Validar Teléfono
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add("El teléfono es obligatorio.");
			return response;
		}
		if (!request.getPhone().matches("\\d{7,15}")) {
			response.listMessage.add("El teléfono debe contener entre 7 y 15 dígitos.");
			return response;
		}
		Optional<EntityCustomer> optPhone = repositoryCustomer.findByPhone(request.getPhone());
		if (optPhone.isPresent() && !optPhone.get().getIdCustomer().equals(entity.getIdCustomer())) {
			response.listMessage.add("Ya existe otro cliente con este teléfono.");
			return response;
		}

		// 3. Validar Email
		String email = request.getEmail() != null ? request.getEmail().trim() : "";
		if (!email.isEmpty()) {
			if (!email.matches("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$")) {
				response.listMessage.add("El formato del correo electrónico es inválido.");
				return response;
			}
			Optional<EntityCustomer> optEmail = repositoryCustomer.findByEmail(email);
			if (optEmail.isPresent() && !optEmail.get().getIdCustomer().equals(entity.getIdCustomer())) {
				response.listMessage.add("Ya existe otro cliente con este correo.");
				return response;
			}
		} else {
			email = null;
		}

		entity.setFirstName(request.getFirstName().trim());
		entity.setSurName(request.getSurName().trim());
		entity.setPhone(request.getPhone().trim());
		entity.setEmail(email);
		
		if (request.getStatus() != null) {
			entity.setStatus(request.getStatus());
		}
		entity.setUpdatedAt(new Date());

		repositoryCustomer.save(entity);

		response.success();
		response.listMessage.add("Cliente actualizado correctamente.");
		return response;
	}

	public ResponseCustomerDelete delete(String idCustomer) {
		ResponseCustomerDelete response = new ResponseCustomerDelete();

		Optional<EntityCustomer> optional = repositoryCustomer.findById(idCustomer);
		if (optional.isEmpty()) {
			response.listMessage.add("Cliente no encontrado.");
			return response;
		}

		EntityCustomer entity = optional.get();
		entity.setStatus(EnumStatus.INACTIVE.getValue());
		entity.setUpdatedAt(new Date());
		repositoryCustomer.save(entity);

		response.success();
		response.listMessage.add("Cliente eliminado correctamente.");
		return response;
	}

	public ResponseCustomerGetAll getall() {
		ResponseCustomerGetAll response = new ResponseCustomerGetAll();
		response.listCustomer = repositoryCustomer.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}

	public ResponseCustomerGetOne getone(String idCustomer) {
		ResponseCustomerGetOne response = new ResponseCustomerGetOne();

		Optional<EntityCustomer> optional = repositoryCustomer.findById(idCustomer);
		if (optional.isEmpty()) {
			response.listMessage.add("Cliente no encontrado.");
			return response;
		}

		response.customer = optional.get();
		response.success();
		response.listMessage.add("Cliente obtenido correctamente.");
		return response;
	}
}