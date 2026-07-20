package com.epiis.apibarbershop.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessAppointment;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "appointment")
public class AppointmentController {
	private static final Logger log = LoggerFactory.getLogger(AppointmentController.class);
	private final BusinessAppointment businessAppointment;

	public AppointmentController(BusinessAppointment businessAppointment) {
		this.businessAppointment = businessAppointment;
	}

	// Admin + Cliente (reserva pública)
	@PostMapping(path = "insert")
	public ResponseEntity<ResponseAppointmentInsert> actionInsert(@RequestBody RequestAppointmentInsert request) {
		try {
			return ResponseEntity.ok(businessAppointment.insert(request));
		} catch (Exception e) {
			log.error("Error al registrar la reserva", e);
			ResponseAppointmentInsert response = new ResponseAppointmentInsert();
			response.exception();
			response.listMessage.add("Error al registrar la reserva: " + e.getMessage());
			return ResponseEntity.ok(response);
		}
	}

	// Admin + Barbero
	@PutMapping(path = "update")
	public ResponseEntity<ResponseAppointmentUpdate> actionUpdate(@RequestBody RequestAppointmentUpdate request) {
		try { return ResponseEntity.ok(businessAppointment.update(request)); } catch (Exception _) { return null; }
	}

	// Admin
	@DeleteMapping(path = "delete/{idAppointment}")
	public ResponseEntity<ResponseAppointmentDelete> actionDelete(@PathVariable String idAppointment) {
		try { return ResponseEntity.ok(businessAppointment.delete(idAppointment)); } catch (Exception _) { return null; }
	}

	// Admin + Barbero
	@GetMapping(path = "getall")
	public ResponseEntity<ResponseAppointmentGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessAppointment.getall()); } catch (Exception _) { return null; }
	}

	// Admin + Barbero
	@GetMapping(path = "getone/{idAppointment}")
	public ResponseEntity<ResponseAppointmentGetOne> actionGetOne(@PathVariable String idAppointment) {
		try { return ResponseEntity.ok(businessAppointment.getone(idAppointment)); } catch (Exception _) { return null; }
	}

	// Barbero — ver solo sus propias citas
	@GetMapping(path = "getbybarber/{idUser}")
	public ResponseEntity<ResponseAppointmentGetAll> actionGetByBarber(@PathVariable String idUser) {
		try { return ResponseEntity.ok(businessAppointment.getbybarber(idUser)); } catch (Exception _) { return null; }
	}
}