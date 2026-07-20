package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessService;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "service")
public class ServiceController {
	private final BusinessService businessService;

	public ServiceController(BusinessService businessService) {
		this.businessService = businessService;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseServiceInsert> actionInsert(@RequestBody RequestServiceInsert request) {
		try { return ResponseEntity.ok(businessService.insert(request)); } catch (Exception _) { return null; }
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseServiceUpdate> actionUpdate(@RequestBody RequestServiceUpdate request) {
		try { return ResponseEntity.ok(businessService.update(request)); } catch (Exception _) { return null; }
	}

	@DeleteMapping(path = "delete/{idService}")
	public ResponseEntity<ResponseServiceDelete> actionDelete(@PathVariable String idService) {
		try { return ResponseEntity.ok(businessService.delete(idService)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponseServiceGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessService.getall()); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getone/{idService}")
	public ResponseEntity<ResponseServiceGetOne> actionGetOne(@PathVariable String idService) {
		try { return ResponseEntity.ok(businessService.getone(idService)); } catch (Exception _) { return null; }
	}
}
