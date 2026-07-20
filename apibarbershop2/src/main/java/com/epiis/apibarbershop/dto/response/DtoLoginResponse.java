package com.epiis.apibarbershop.dto.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoLoginResponse {
	private String token;
	private String role;
	private String idUser;
	private String firstName;
	private String surName;
	private String email;
	private String photo;
	private String message;
}
