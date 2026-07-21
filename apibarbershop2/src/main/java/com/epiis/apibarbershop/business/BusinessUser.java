package com.epiis.apibarbershop.business;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
import com.epiis.apibarbershop.staticdata.EnumStatus;

@Service
public class BusinessUser {
	private final RepositoryUser repositoryUser;
	private final PasswordEncoder passwordEncoder;

	@Value("${upload.users.path:uploads/users/}")
	private String uploadUsersPath;

	public BusinessUser(RepositoryUser repositoryUser, PasswordEncoder passwordEncoder) {
		this.repositoryUser = repositoryUser;
		this.passwordEncoder = passwordEncoder;
	}

	public ResponseUserInsert insert(RequestUserInsert request) {
		ResponseUserInsert response = new ResponseUserInsert();

		// Validaciones obligatorias
		if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
			response.listMessage.add("El nombre es obligatorio.");
		}
		if (request.getSurName() == null || request.getSurName().trim().isEmpty()) {
			response.listMessage.add("El apellido es obligatorio.");
		}
		if (request.getEmail() == null || !request.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
			response.listMessage.add("Correo electrónico inválido o vacío.");
		}
		if (request.getPassword() == null || request.getPassword().length() < 6) {
			response.listMessage.add("La contraseña debe tener al menos 6 caracteres.");
		}
		if (request.getRole() == null || (!request.getRole().equals("ADMIN") && !request.getRole().equals("BARBER"))) {
			response.listMessage.add("El rol debe ser ADMIN o BARBER.");
		}
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add("El teléfono es obligatorio.");
		}
		
		if (!response.listMessage.isEmpty()) {
			return response;
		}

		if (repositoryUser.findByEmail(request.getEmail()).isPresent()) {
			response.listMessage.add("El correo ya está registrado.");
			return response;
		}

		if (repositoryUser.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add("El teléfono ya está registrado.");
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
			response.listMessage.add("Usuario no encontrado.");
			return response;
		}

		// Validaciones obligatorias
		if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
			response.listMessage.add("El nombre es obligatorio.");
		}
		if (request.getSurName() == null || request.getSurName().trim().isEmpty()) {
			response.listMessage.add("El apellido es obligatorio.");
		}
		if (request.getEmail() == null || !request.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
			response.listMessage.add("Correo electrónico inválido o vacío.");
		}
		if (request.getRole() == null || (!request.getRole().equals("ADMIN") && !request.getRole().equals("BARBER"))) {
			response.listMessage.add("El rol debe ser ADMIN o BARBER.");
		}
		if (request.getPhone() == null || request.getPhone().trim().isEmpty()) {
			response.listMessage.add("El teléfono es obligatorio.");
		}
		
		if (!response.listMessage.isEmpty()) {
			return response;
		}

		// Validar si email o phone pertenecen a OTRO usuario
		Optional<EntityUser> existingEmail = repositoryUser.findByEmail(request.getEmail());
		if (existingEmail.isPresent() && !existingEmail.get().getIdUser().equals(request.getIdUser())) {
			response.listMessage.add("El correo ya está registrado por otro usuario.");
			return response;
		}

		Optional<EntityUser> existingPhone = repositoryUser.findByPhone(request.getPhone());
		if (existingPhone.isPresent() && !existingPhone.get().getIdUser().equals(request.getIdUser())) {
			response.listMessage.add("El teléfono ya está registrado por otro usuario.");
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
			response.listMessage.add("Usuario no encontrado.");
			return response;
		}

		EntityUser entity = optional.get();
		entity.setStatus(EnumStatus.INACTIVE.getValue());
		entity.setUpdatedAt(new Date());
		repositoryUser.save(entity);

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
			response.listMessage.add("Usuario no encontrado.");
			return response;
		}

		response.user = optional.get();
		response.success();
		response.listMessage.add("Usuario obtenido correctamente.");
		return response;
	}

	// ── Subir foto del usuario ──
	public ResponseUserPhotoUpload uploadPhoto(String idUser, MultipartFile file) {
		ResponseUserPhotoUpload response = new ResponseUserPhotoUpload();

		// Validar usuario
		Optional<EntityUser> optional = repositoryUser.findById(idUser);
		if (optional.isEmpty()) {
			response.listMessage.add("Usuario no encontrado.");
			return response;
		}

		// Validar archivo
		if (file == null || file.isEmpty()) {
			response.listMessage.add("Debe seleccionar una imagen.");
			return response;
		}

		String originalName = file.getOriginalFilename();
		if (originalName == null || !originalName.contains(".")) {
			response.listMessage.add("Archivo sin extensión válida.");
			return response;
		}

		String extension = originalName.substring(originalName.lastIndexOf(".") + 1).toLowerCase();

		if (!extension.matches("jpg|jpeg|png|webp|gif")) {
			response.listMessage.add("Solo se permiten imágenes (jpg, jpeg, png, webp, gif).");
			return response;
		}

		// Nombre único
		String uniqueName = UUID.randomUUID().toString() + "." + extension;

		// Guardar en disco
		try {
			Path dirPath = Paths.get(uploadUsersPath);
			if (!Files.exists(dirPath)) {
				Files.createDirectories(dirPath);
			}
			Path filePath = dirPath.resolve(uniqueName);
			file.transferTo(new File(filePath.toAbsolutePath().toString()));
		} catch (IOException e) {
			response.listMessage.add("Error al guardar la imagen: " + e.getMessage());
			return response;
		}

		// Actualizar campo photo en BD
		EntityUser entity = optional.get();
		entity.setPhoto(uploadUsersPath + uniqueName);
		entity.setUpdatedAt(new Date());
		repositoryUser.save(entity);

		response.photo = uploadUsersPath + uniqueName;
		response.success();
		response.listMessage.add("Foto subida correctamente.");
		return response;
	}
}
