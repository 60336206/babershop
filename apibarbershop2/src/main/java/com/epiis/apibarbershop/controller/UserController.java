package com.epiis.apibarbershop.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.epiis.apibarbershop.business.BusinessUser;
import com.epiis.apibarbershop.dto.request.*;
import com.epiis.apibarbershop.dto.response.*;

@RestController
@RequestMapping(path = "user")
public class UserController {
	private final BusinessUser businessUser;

	public UserController(BusinessUser businessUser) {
		this.businessUser = businessUser;
	}

	@PostMapping(path = "insert")
	public ResponseEntity<ResponseUserInsert> actionInsert(@RequestBody RequestUserInsert request) {
		try { return ResponseEntity.ok(businessUser.insert(request)); } catch (Exception _) { return null; }
	}

	@PutMapping(path = "update")
	public ResponseEntity<ResponseUserUpdate> actionUpdate(@RequestBody RequestUserUpdate request) {
		try { return ResponseEntity.ok(businessUser.update(request)); } catch (Exception _) { return null; }
	}

	@DeleteMapping(path = "delete/{idUser}")
	public ResponseEntity<ResponseUserDelete> actionDelete(@PathVariable String idUser) {
		try { return ResponseEntity.ok(businessUser.delete(idUser)); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getall")
	public ResponseEntity<ResponseUserGetAll> actionGetAll() {
		try { return ResponseEntity.ok(businessUser.getall()); } catch (Exception _) { return null; }
	}

	@GetMapping(path = "getone/{idUser}")
	public ResponseEntity<ResponseUserGetOne> actionGetOne(@PathVariable String idUser) {
		try { return ResponseEntity.ok(businessUser.getone(idUser)); } catch (Exception _) { return null; }
	}

	// POST /user/upload-photo/{idUser}
	// Sube la foto del barbero/usuario por multipart/form-data
	@PostMapping(
		path = "upload-photo/{idUser}",
		consumes = MediaType.MULTIPART_FORM_DATA_VALUE
	)
	public ResponseEntity<ResponseUserPhotoUpload> actionUploadPhoto(
			@PathVariable String idUser,
			@RequestParam("file") MultipartFile file) {
		try { return ResponseEntity.ok(businessUser.uploadPhoto(idUser, file)); } catch (Exception _) { return null; }
	}
}
