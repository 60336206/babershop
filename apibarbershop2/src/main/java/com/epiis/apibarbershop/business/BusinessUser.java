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
import com.epiis.apibarbershop.repository.RepositoryCustomer;
import com.epiis.apibarbershop.staticdata.EnumStatus;

@Service
public class BusinessUser {
	private final RepositoryUser repositoryUser;
	private final RepositoryCustomer repositoryCustomer;
	private final PasswordEncoder passwordEncoder;

	@Value("${upload.users.path:uploads/users/}")
	private String uploadUsersPath;

	public BusinessUser(RepositoryUser repositoryUser, RepositoryCustomer repositoryCustomer, PasswordEncoder passwordEncoder) {
		this.repositoryUser = repositoryUser;
		this.repositoryCustomer = repositoryCustomer;
		this.passwordEncoder = passwordEncoder;
	}

	public ResponseUserInsert insert(RequestUserInsert request) {
		ResponseUserInsert response = new ResponseUserInsert();

		// Validaciones obligatorias
		if (request.getFirstName() == null || request.getFirstName().trim().length() < 3) {
			response.listMessage.add("El nombre es obligatorio y debe tener al menos 3 caracteres.");
		}
		if (request.getSurName() == null || request.getSurName().trim().length() < 3) {
			response.listMessage.add("El apellido es obligatorio y debe tener al menos 3 caracteres.");
		}
		if (request.getEmail() == null || !request.getEmail().matches("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")) {
			response.listMessage.add("Correo electrónico inválido o vacío.");
		}
		if (request.getPassword() == null || !request.getPassword().matches("^(?=.*[A-Z])(?=.*\\d).{6,}$")) {
			response.listMessage.add("La contraseña debe tener al menos 6 caracteres, 1 mayúscula y 1 número.");
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

		if (repositoryUser.findByEmail(request.getEmail()).isPresent() || repositoryCustomer.findByEmail(request.getEmail()).isPresent()) {
			response.listMessage.add("El correo ya está registrado en el sistema.");
			return response;
		}

		if (repositoryUser.findByPhone(request.getPhone()).isPresent() || repositoryCustomer.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add("El teléfono ya está registrado en el sistema.");
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
		if (request.getFirstName() == null || request.getFirstName().trim().length() < 3) {
			response.listMessage.add("El nombre es obligatorio y debe tener al menos 3 caracteres.");
		}
		if (request.getSurName() == null || request.getSurName().trim().length() < 3) {
			response.listMessage.add("El apellido es obligatorio y debe tener al menos 3 caracteres.");
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
			response.listMessage.add("El correo ya está registrado en el sistema.");
			return response;
		}
		if (repositoryCustomer.findByEmail(request.getEmail()).isPresent()) {
			response.listMessage.add("El correo ya está registrado en el sistema.");
			return response;
		}

		Optional<EntityUser> existingPhone = repositoryUser.findByPhone(request.getPhone());
		if (existingPhone.isPresent() && !existingPhone.get().getIdUser().equals(request.getIdUser())) {
			response.listMessage.add("El teléfono ya está registrado en el sistema.");
			return response;
		}
		if (repositoryCustomer.findByPhone(request.getPhone()).isPresent()) {
			response.listMessage.add("El teléfono ya está registrado en el sistema.");
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
