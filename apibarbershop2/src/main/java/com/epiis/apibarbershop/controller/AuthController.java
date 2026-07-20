package com.epiis.apibarbershop.controller;

import java.util.Date;
import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.dto.request.DtoLoginRequest;
import com.epiis.apibarbershop.dto.request.DtoRegisterRequest;
import com.epiis.apibarbershop.dto.response.DtoLoginResponse;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.repository.RepositoryUser;
import com.epiis.apibarbershop.security.JwtService;
import com.epiis.apibarbershop.staticdata.EnumStatus;
import com.epiis.apibarbershop.staticdata.EnumUserRole;

@RestController
@RequestMapping(path = "auth")
public class AuthController {

	private final RepositoryUser repositoryUser;
	private final JwtService jwtService;
	private final PasswordEncoder passwordEncoder;

	public AuthController(
			RepositoryUser repositoryUser,
			JwtService jwtService,
			PasswordEncoder passwordEncoder) {
		this.repositoryUser = repositoryUser;
		this.jwtService = jwtService;
		this.passwordEncoder = passwordEncoder;
	}

	// POST /auth/login
	@PostMapping(path = "login")
	public ResponseEntity<DtoLoginResponse> actionLogin(@RequestBody DtoLoginRequest request) {
		DtoLoginResponse response = new DtoLoginResponse();

		EntityUser user = repositoryUser.findByEmail(request.getEmail()).orElse(null);

		if (user == null) {
			response.setMessage("Correo no registrado.");
			return ResponseEntity.status(401).body(response);
		}

		if (user.getStatus() != 1) {
			response.setMessage("Usuario inactivo. Contacte al administrador.");
			return ResponseEntity.status(401).body(response);
		}

		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			response.setMessage("Contraseña incorrecta.");
			return ResponseEntity.status(401).body(response);
		}

		String token = jwtService.generateToken(user.getEmail(), user.getRole());

		response.setToken(token);
		response.setRole(user.getRole());
		response.setIdUser(user.getIdUser());
		response.setFirstName(user.getFirstName());
		response.setSurName(user.getSurName());
		response.setEmail(user.getEmail());
		response.setPhoto(user.getPhoto());
		response.setMessage("Login exitoso.");

		return ResponseEntity.ok(response);
	}

	// POST /auth/register  — crea Admin o Barbero con password encriptado
	@PostMapping(path = "register")
	public ResponseEntity<DtoLoginResponse> actionRegister(@RequestBody DtoRegisterRequest request) {
		DtoLoginResponse response = new DtoLoginResponse();

		if (repositoryUser.findByEmail(request.getEmail()).isPresent()) {
			response.setMessage("El correo ya está registrado.");
			return ResponseEntity.status(400).body(response);
		}

		String role = (request.getRole() != null && !request.getRole().isBlank())
			? request.getRole()
			: EnumUserRole.BARBER.toString();

		EntityUser entity = new EntityUser();
		entity.setIdUser(UUID.randomUUID().toString());
		entity.setFirstName(request.getFirstName());
		entity.setSurName(request.getSurName());
		entity.setEmail(request.getEmail());
		entity.setPassword(passwordEncoder.encode(request.getPassword()));
		entity.setRole(role);
		entity.setPhoto(request.getPhoto());
		entity.setStatus(EnumStatus.ACTIVE.getValue());
		entity.setCreatedAt(new Date());
		entity.setUpdatedAt(entity.getCreatedAt());

		repositoryUser.save(entity);

		String token = jwtService.generateToken(entity.getEmail(), entity.getRole());

		response.setToken(token);
		response.setRole(entity.getRole());
		response.setIdUser(entity.getIdUser());
		response.setFirstName(entity.getFirstName());
		response.setSurName(entity.getSurName());
		response.setEmail(entity.getEmail());
		response.setMessage("Usuario registrado correctamente.");

		return ResponseEntity.ok(response);
	}
}
