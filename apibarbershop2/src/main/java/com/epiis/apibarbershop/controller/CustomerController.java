package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessCustomer;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "customer")
public class CustomerController {
	private final BusinessCustomer businessCustomer;

	public CustomerController(BusinessCustomer businessCustomer) {
		this.businessCustomer = businessCustomer;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseCustomerInsert> actionInsert(@RequestBody RequestCustomerInsert request) {
		try { return ResponseEntity.ok(businessCustomer.insert(request)); } catch (Exception _) { return null; }
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseCustomerUpdate> actionUpdate(@RequestBody RequestCustomerUpdate request) {
		try { return ResponseEntity.ok(businessCustomer.update(request)); } catch (Exception _) { return null; }
	}

	@DeleteMapping(path = "delete/{idCustomer}")
	public ResponseEntity<ResponseCustomerDelete> actionDelete(@PathVariable String idCustomer) {
		try { return ResponseEntity.ok(businessCustomer.delete(idCustomer)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponseCustomerGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessCustomer.getall()); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getone/{idCustomer}")
	public ResponseEntity<ResponseCustomerGetOne> actionGetOne(@PathVariable String idCustomer) {
		try { return ResponseEntity.ok(businessCustomer.getone(idCustomer)); } catch (Exception _) { return null; }
	}
}
