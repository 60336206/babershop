package com.epiis.apibarbershop.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.epiis.apibarbershop.business.BusinessGallery;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "gallery")
public class GalleryController {
	private final BusinessGallery businessGallery;

	public GalleryController(BusinessGallery businessGallery) {
		this.businessGallery = businessGallery;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseGalleryInsert> actionInsert(@RequestBody RequestGalleryInsert request) {
		try { return ResponseEntity.ok(businessGallery.insert(request)); } catch (Exception _) { return null; }
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseGalleryUpdate> actionUpdate(@RequestBody RequestGalleryUpdate request) {
		try { return ResponseEntity.ok(businessGallery.update(request)); } catch (Exception _) { return null; }
	}

	@DeleteMapping(path = "delete/{idGallery}")
	public ResponseEntity<ResponseGalleryDelete> actionDelete(@PathVariable String idGallery) {
		try { return ResponseEntity.ok(businessGallery.delete(idGallery)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponseGalleryGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessGallery.getall()); } catch (Exception _) { return null; }
	}
}
