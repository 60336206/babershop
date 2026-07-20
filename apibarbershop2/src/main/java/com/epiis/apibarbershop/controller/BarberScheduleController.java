package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessBarberSchedule;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.generic.ResponseGeneric;

@RestController
@RequestMapping(path = "barberschedule")
public class BarberScheduleController {
	private final BusinessBarberSchedule businessBarberSchedule;

	public BarberScheduleController(BusinessBarberSchedule businessBarberSchedule) {
		this.businessBarberSchedule = businessBarberSchedule;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseBarberScheduleInsert> actionInsert(@RequestBody RequestBarberScheduleInsert request) {
		try { return ResponseEntity.ok(businessBarberSchedule.insert(request)); } 
		catch (Exception e) { 
			e.printStackTrace(); 
			return null; 
		}
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseBarberScheduleUpdate> actionUpdate(@RequestBody RequestBarberScheduleUpdate request) {
		try { return ResponseEntity.ok(businessBarberSchedule.update(request)); } 
		catch (Exception e) { 
			e.printStackTrace(); 
			return null; 
		}
	}

	@DeleteMapping(path = "delete/{idBarberSchedule}")
	public ResponseEntity<ResponseBarberScheduleDelete> actionDelete(@PathVariable String idBarberSchedule) {
		try { return ResponseEntity.ok(businessBarberSchedule.delete(idBarberSchedule)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponseBarberScheduleGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessBarberSchedule.getall()); } catch (Exception _) { return null; }
	}

	// Barbero — ver solo sus horarios
	@GetMapping(path = "getbybarber/{idUser}")
	public ResponseEntity<ResponseBarberScheduleGetAll> actionGetByBarber(@PathVariable String idUser) {
		try { return ResponseEntity.ok(businessBarberSchedule.getbybarber(idUser)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "availablehours/{idUser}/{date}")
	public ResponseEntity<ResponseAvailableHours> actionGetAvailableHours(@PathVariable String idUser, @PathVariable String date) {
		try { return ResponseEntity.ok(businessBarberSchedule.getAvailableHours(idUser, date)); } catch (Exception _) { return null; }
	}
}
