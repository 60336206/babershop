package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessPayment;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "payment")
public class PaymentController {
	private final BusinessPayment businessPayment;

	public PaymentController(BusinessPayment businessPayment) {
		this.businessPayment = businessPayment;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponsePaymentInsert> actionInsert(@RequestBody RequestPaymentInsert request) {
		try { return ResponseEntity.ok(businessPayment.insert(request)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponsePaymentGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessPayment.getall()); } catch (Exception _) { return null; }
	}
}
