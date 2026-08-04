package com.epiis.apibarbershop.business;

import com.epiis.apibarbershop.generic.ValidationConstants;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.epiis.apibarbershop.dto.request.RequestUserInsert;
import com.epiis.apibarbershop.dto.request.RequestUserUpdate;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryUser;
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.staticdata.EnumStatus;
import com.epiis.apibarbershop.service.FileStorageService;

@Service
@SuppressWarnings("all")
public class BusinessUser {
	private final RepositoryUser repositoryUser;
	private final RepositoryCustomer repositoryCustomer;
	private final PasswordEncoder passwordEncoder;
	private final FileStorageService fileStorageService;

	@Value("${upload.users.path:uploads/users/}")
	private String uploadUsersPath;

	public BusinessUser(RepositoryUser repositoryUser, RepositoryCustomer repositoryCustomer,
			PasswordEncoder passwordEncoder, FileStorageService fileStorageService) {
		this.repositoryUser = repositoryUser;
		this.repositoryCustomer = repositoryCustomer;
		this.passwordEncoder = passwordEncoder;
		this.fileStorageService = fileStorageService;
	}

	public ResponseUserInsert insert(RequestUserInsert request) {
		ResponseUserInsert response = new ResponseUserInsert();

		// Validaciones obligatorias
		if (request.getFirstName() == null || request.getFirstName().trim().length() < 3) {
			response.listMessage.add(ValidationConstants.MSG_NAME_INVALID);
		}
		if (request.getSurName() == null || request.getSurName().trim().length() < 3) {
			response.listMessage.add(ValidationConstants.MSG_SURNAME_INVALID);
		}
		if (!isValidEmail(request.getEmail())) {
			response.listMessage.add("Correo electrónico inválido o vacío.");
		}
		if (request.getPassword() == null || !request.getPassword().matches("^(?=.*[A-Z])(?=.*\\d).{6,}$")) {
			response.listMessage.add("La contraseña debe tener al menos 6 caracteres, 1 mayúscula y 1 número.");
		}
		if (request.getRole() == null || (!request.getRole().equals("ADMIN") && !request.getRole().equals("BARBER"))) {
			response.listMessage.add("El rol debe ser ADMIN o BARBER.");
		}
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_PHONE_REQUIRED);
		}
		
		if (!response.listMessage.isEmpty()) {
			return response;
		}

		if (repositoryUser.findByEmail(request.getEmail()).isPresent() || repositoryCustomer.findByEmail(request.getEmail()).isPresent()) {
			response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
			return response;
		}

		if (repositoryUser.findByPhone(request.getPhone()).isPresent() || repositoryCustomer.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
			return response;
		}

		EntityUser entity = new EntityUser();
		entity.setIdUser(UUID.randomUUID().toString());
		entity.setFirstName(request.getFirstName());
		entity.setSurName(request.getSurName());
		entity.setEmail(request.getEmail());
		entity.setPhone(request.getPhone());
		entity.setPassword(passwordEncoder.encode(request.getPassword()));
		entity.setRole(request.getRole());
		entity.setPhoto(request.getPhoto());
		entity.setStatus(EnumStatus.ACTIVE.getValue());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryUser.save(entity);

		response.setIdUser(entity.getIdUser());
		response.success();
		response.listMessage.add("Usuario registrado correctamente.");
		return response;
	}

	public ResponseUserUpdate update(RequestUserUpdate request) {
		ResponseUserUpdate response = new ResponseUserUpdate();

		if (request.getIdUser() == null || request.getIdUser().trim().isEmpty()) {
			response.listMessage.add("El ID de usuario es obligatorio.");
			return response;
		}

		Optional<EntityUser> optional = repositoryUser.findById(request.getIdUser());
		if (optional.isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_USER_NOT_FOUND);
			return response;
		}

		// Validaciones obligatorias
		if (request.getFirstName() == null || request.getFirstName().trim().length() < 3) {
			response.listMessage.add(ValidationConstants.MSG_NAME_INVALID);
		}
		if (request.getSurName() == null || request.getSurName().trim().length() < 3) {
			response.listMessage.add(ValidationConstants.MSG_SURNAME_INVALID);
		}
		if (!isValidEmail(request.getEmail())) {
			response.listMessage.add("Correo electrónico inválido o vacío.");
		}
		if (request.getRole() == null || (!request.getRole().equals("ADMIN") && !request.getRole().equals("BARBER"))) {
			response.listMessage.add("El rol debe ser ADMIN o BARBER.");
		}
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_PHONE_REQUIRED);
		}
		
		if (!response.listMessage.isEmpty()) {
			return response;
		}

		// Validar si email o phone pertenecen a OTRO usuario
		Optional<EntityUser> existingEmail = repositoryUser.findByEmail(request.getEmail());
		if (existingEmail.isPresent() && !existingEmail.get().getIdUser().equals(request.getIdUser())) {
			response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
			return response;
		}
		if (repositoryCustomer.findByEmail(request.getEmail()).isPresent()) {
			response.listMessage.add(ValidationConstants.MSG_EMAIL_EXISTS);
			return response;
		}

		Optional<EntityUser> existingPhone = repositoryUser.findByPhone(request.getPhone());
		if (existingPhone.isPresent() && !existingPhone.get().getIdUser().equals(request.getIdUser())) {
			response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
			return response;
		}
		if (repositoryCustomer.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add(ValidationConstants.MSG_PHONE_EXISTS);
			return response;
		}

		EntityUser entity = optional.get();
		entity.setFirstName(request.getFirstName());
		entity.setSurName(request.getSurName());
		entity.setEmail(request.getEmail());
		entity.setPhone(request.getPhone());
		entity.setRole(request.getRole());
		entity.setPhoto(request.getPhoto());
		if (request.getStatus() != null) {
			entity.setStatus(request.getStatus());
		}
		entity.setUpdatedAt(new Date());

		repositoryUser.save(entity);

		response.success();
		response.listMessage.add("Usuario actualizado correctamente.");
		return response;
	}

	public ResponseUserDelete delete(String idUser) {
		ResponseUserDelete response = new ResponseUserDelete();

		Optional<EntityUser> optional = repositoryUser.findById(idUser);
		if (optional.isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_USER_NOT_FOUND);
			return response;
		}

		EntityUser entity = optional.get();
		repositoryUser.delete(entity);

		response.success();
		response.listMessage.add("Usuario eliminado correctamente.");
		return response;
	}

	public ResponseUserGetAll getall() {
		ResponseUserGetAll response = new ResponseUserGetAll();
		response.listUser = repositoryUser.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}

	public ResponseUserGetOne getone(String idUser) {
		ResponseUserGetOne response = new ResponseUserGetOne();

		Optional<EntityUser> optional = repositoryUser.findById(idUser);
		if (optional.isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_USER_NOT_FOUND);
			return response;
		}

		response.user = optional.get();
		response.success();
		response.listMessage.add("Usuario obtenido correctamente.");
		return response;
	}

	private boolean isValidEmail(String email) {
		if (email == null || email.length() > 254) {
			return false;
		}

		int atIndex = email.indexOf('@');
		if (atIndex < 1 || atIndex != email.lastIndexOf('@') || atIndex == email.length() - 1) {
			return false;
		}

		String localPart = email.substring(0, atIndex);
		String domain = email.substring(atIndex + 1);
		if (localPart.length() > 64 || domain.startsWith(".") || domain.endsWith(".") || !domain.contains(".")) {
			return false;
		}

		for (int i = 0; i < localPart.length(); i++) {
			char character = localPart.charAt(i);
			if (!Character.isLetterOrDigit(character) && character != '.' && character != '_' && character != '-') {
				return false;
			}
		}

		String[] labels = domain.split("\\.", -1);
		if (labels[labels.length - 1].length() < 2 || labels[labels.length - 1].length() > 4) {
			return false;
		}
		for (String label : labels) {
			if (label.isEmpty()) {
				return false;
			}
			for (int i = 0; i < label.length(); i++) {
				char character = label.charAt(i);
				if (!Character.isLetterOrDigit(character) && character != '-') {
					return false;
				}
			}
		}
		return true;
	}

	// ── Subir foto del usuario ──
	public ResponseUserPhotoUpload uploadPhoto(String idUser, MultipartFile file) {
		ResponseUserPhotoUpload response = new ResponseUserPhotoUpload();

		// Validar usuario
		Optional<EntityUser> optional = repositoryUser.findById(idUser);
		if (optional.isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_USER_NOT_FOUND);
			return response;
		}

		// Validar y guardar la imagen usando el servicio compartido
		FileStorageService.StoredFile storedFile;
		try {
			storedFile = fileStorageService.store(file, uploadUsersPath, "Debe seleccionar una imagen.");
		} catch (FileStorageService.FileValidationException | FileStorageService.FileStorageException e) {
			response.listMessage.add(e.getMessage());
			return response;
		}

		// Actualizar campo photo en BD
		EntityUser entity = optional.get();
		entity.setPhoto(uploadUsersPath + storedFile.getFileName());
		entity.setUpdatedAt(new Date());
		repositoryUser.save(entity);

		response.photo = uploadUsersPath + storedFile.getFileName();
		response.success();
		response.listMessage.add("Foto subida correctamente.");
		return response;
	}
}
