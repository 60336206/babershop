package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessAppointmentComment;
import com.epiis.apibarbershop.dto.request.RequestAppointmentCommentInsert;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentGetAll;
import com.epiis.apibarbershop.dto.response.ResponseAppointmentCommentInsert;

@RestController
@RequestMapping(path = "appointmentcomment")
public class AppointmentCommentController {

	private final BusinessAppointmentComment businessAppointmentComment;

	public AppointmentCommentController(BusinessAppointmentComment businessAppointmentComment) {
		this.businessAppointmentComment = businessAppointmentComment;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseAppointmentCommentInsert> actionInsert(
			@RequestBody RequestAppointmentCommentInsert request) {
		try {
			return ResponseEntity.ok(businessAppointmentComment.insert(request));
		} catch (Exception _) {
			return null;
		}
	}

	@GetMapping(path = "getbyappointment/{idAppointment}")
	public ResponseEntity<ResponseAppointmentCommentGetAll> actionGetByAppointment(
			@PathVariable String idAppointment) {
		try {
			return ResponseEntity.ok(businessAppointmentComment.getByAppointment(idAppointment));
		} catch (Exception _) {
			return null;
		}
	}
}
