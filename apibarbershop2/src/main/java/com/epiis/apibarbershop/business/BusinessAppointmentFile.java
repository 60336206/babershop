package com.epiis.apibarbershop.business;

import com.epiis.apibarbershop.generic.ValidationConstants;
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
import com.epiis.apibarbershop.service.FileStorageService;

@Service
public class BusinessAppointmentFile {

	private final RepositoryAppointmentFile repositoryAppointmentFile;
	private final RepositoryAppointment repositoryAppointment;
	private final FileStorageService fileStorageService;

	@Value("${upload.path:uploads/appointments/}")
	private String uploadPath;

	public BusinessAppointmentFile(
			RepositoryAppointmentFile repositoryAppointmentFile,
			RepositoryAppointment repositoryAppointment,
			FileStorageService fileStorageService) {
		this.repositoryAppointmentFile = repositoryAppointmentFile;
		this.repositoryAppointment = repositoryAppointment;
		this.fileStorageService = fileStorageService;
	}

	public ResponseAppointmentFileUpload uploadImage(String idAppointment, MultipartFile file) {
		ResponseAppointmentFileUpload response = new ResponseAppointmentFileUpload();

		// Validar que la reserva existe
		if (repositoryAppointment.findById(idAppointment).isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_APPOINTMENT_NOT_FOUND);
			return response;
		}

		// Validar y guardar el archivo usando el servicio compartido
		FileStorageService.StoredFile storedFile;
		try {
			storedFile = fileStorageService.store(file, uploadPath, "Debe seleccionar un archivo.");
		} catch (FileStorageService.FileValidationException | FileStorageService.FileStorageException e) {
			response.listMessage.add(e.getMessage());
			return response;
		}

		// Persistir registro en base de datos
		Date now = new Date();
		EntityAppointmentFile entity = new EntityAppointmentFile();
		entity.setIdAppointmentFile(UUID.randomUUID().toString());
		entity.setIdAppointment(idAppointment);
		entity.setFileName(storedFile.getFileName());
		entity.setExtension(storedFile.getExtension());
		entity.setCreatedAt(now);
		entity.setUpdatedAt(now);

		repositoryAppointmentFile.save(entity);

		response.fileName = storedFile.getFileName();
		response.extension = storedFile.getExtension();
		response.success();
		response.listMessage.add("Imagen subida correctamente.");
		return response;
	}

	public ResponseAppointmentFileGetAll getByAppointment(String idAppointment) {
		ResponseAppointmentFileGetAll response = new ResponseAppointmentFileGetAll();

		if (repositoryAppointment.findById(idAppointment).isEmpty()) {
			response.listMessage.add(ValidationConstants.MSG_APPOINTMENT_NOT_FOUND);
			return response;
		}

		response.listFile = repositoryAppointmentFile.findByIdAppointment(idAppointment);
		response.success();
		response.listMessage.add("Imágenes obtenidas correctamente.");
		return response;
	}
}
