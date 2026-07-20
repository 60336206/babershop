package com.epiis.apibarbershop.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoRegisterRequest {
	private String firstName;
	private String surName;
	private String email;
	private String password;
	private String role;
	private String photo;
}
