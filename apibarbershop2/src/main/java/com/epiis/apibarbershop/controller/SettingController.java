package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessSetting;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "setting")
public class SettingController {
	private final BusinessSetting businessSetting;

	public SettingController(BusinessSetting businessSetting) {
		this.businessSetting = businessSetting;
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseSettingUpdate> actionUpdate(@RequestBody RequestSettingUpdate request) {
		try { return ResponseEntity.ok(businessSetting.update(request)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getone")
	public ResponseEntity<ResponseSettingGetOne> actionGetOne() {
		try { return ResponseEntity.ok(businessSetting.getone()); } catch (Exception _) { return null; }
	}
}
