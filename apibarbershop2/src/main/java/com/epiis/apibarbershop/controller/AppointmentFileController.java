package com.epiis.apibarbershop.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.epiis.apibarbershop.business.BusinessAppointmentFile;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentFileUpload;

@RestController
@RequestMapping(path = "appointment")
public class AppointmentFileController {

	private final BusinessAppointmentFile businessAppointmentFile;

	public AppointmentFileController(BusinessAppointmentFile businessAppointmentFile) {
		this.businessAppointmentFile = businessAppointmentFile;
	}

	// POST /appointment/upload-image/{idAppointment}
	// Sube imagen de referencia del cliente para la reserva
	@PostMapping(
		path = "upload-image/{idAppointment}",
		consumes = MediaType.MULTIPART_FORM_DATA_VALUE
	)
	public ResponseEntity<ResponseAppointmentFileUpload> actionUploadImage(
			@PathVariable String idAppointment,
			@RequestParam("file") MultipartFile file) {
		try {
			return ResponseEntity.ok(businessAppointmentFile.uploadImage(idAppointment, file));
		} catch (Exception _) {
			return null;
		}
	}

	@GetMapping(path = "getfiles/{idAppointment}")
	public ResponseEntity<ResponseAppointmentFileGetAll> actionGetFiles(
			@PathVariable String idAppointment) {
		try {
			return ResponseEntity.ok(businessAppointmentFile.getByAppointment(idAppointment));
		} catch (Exception _) {
			return null;
		}
	}
}
