package com.epiis.apibarbershop.business;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileUpload;
import com.epiis.apibarbershop.entity.EntityAppointmentFile;
import com.epiis.apibarbershop.repository.RepositoryAppointment;
import com.epiis.apibarbershop.repository.RepositoryAppointmentFile;

@Service
public class BusinessAppointmentFile {

	private final RepositoryAppointmentFile repositoryAppointmentFile;
	private final RepositoryAppointment repositoryAppointment;

	@Value("${upload.path:uploads/appointments/}")
	private String uploadPath;

	public BusinessAppointmentFile(
			RepositoryAppointmentFile repositoryAppointmentFile,
			RepositoryAppointment repositoryAppointment) {
		this.repositoryAppointmentFile = repositoryAppointmentFile;
		this.repositoryAppointment = repositoryAppointment;
	}

	public ResponseAppointmentFileUpload uploadImage(String idAppointment, MultipartFile file) {
		ResponseAppointmentFileUpload response = new ResponseAppointmentFileUpload();

		// Validar que la reserva existe
		if (repositoryAppointment.findById(idAppointment).isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		// Validar que el archivo no esté vacío
		if (file == null || file.isEmpty()) {
			response.listMessage.add("Debe seleccionar un archivo.");
			return response;
		}

		// Obtener nombre original y extensión
		String originalName = file.getOriginalFilename();
		if (originalName == null || !originalName.contains(".")) {
			response.listMessage.add("Archivo sin extensión válida.");
			return response;
		}

		String extension = originalName.substring(originalName.lastIndexOf(".") + 1).toLowerCase();

		// Validar extensiones permitidas
		if (!extension.matches("jpg|jpeg|png|webp|gif")) {
			response.listMessage.add("Solo se permiten imágenes (jpg, jpeg, png, webp, gif).");
			return response;
		}

		// Generar nombre único para el archivo
		String uniqueName = UUID.randomUUID().toString() + "." + extension;

		// Crear directorio si no existe
		try {
			Path dirPath = Paths.get(uploadPath);
			if (!Files.exists(dirPath)) {
				Files.createDirectories(dirPath);
			}

			// Guardar archivo en disco
			Path filePath = dirPath.resolve(uniqueName);
			file.transferTo(new File(filePath.toAbsolutePath().toString()));

		} catch (IOException e) {
			response.listMessage.add("Error al guardar el archivo: " + e.getMessage());
			return response;
		}

		// Persistir registro en base de datos
		Date now = new Date();
		EntityAppointmentFile entity = new EntityAppointmentFile();
		entity.setIdAppointmentFile(UUID.randomUUID().toString());
		entity.setIdAppointment(idAppointment);
		entity.setFileName(uniqueName);
		entity.setExtension(extension);
		entity.setCreatedAt(now);
		entity.setUpdatedAt(now);

		repositoryAppointmentFile.save(entity);

		response.fileName = uniqueName;
		response.extension = extension;
		response.success();
		response.listMessage.add("Imagen subida correctamente.");
		return response;
	}

	public ResponseAppointmentFileGetAll getByAppointment(String idAppointment) {
		ResponseAppointmentFileGetAll response = new ResponseAppointmentFileGetAll();

		if (repositoryAppointment.findById(idAppointment).isEmpty()) {
			response.listMessage.add("Reserva no encontrada.");
			return response;
		}

		response.listFile = repositoryAppointmentFile.findByIdAppointment(idAppointment);
		response.success();
		response.listMessage.add("Imágenes obtenidas correctamente.");
		return response;
	}
}
