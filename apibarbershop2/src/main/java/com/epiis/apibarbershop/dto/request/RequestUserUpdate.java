package com.epiis.apibarbershop.dto.request;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestUserUpdate {
	private String idUser;
	private String firstName;
	private String surName;
	private String email;
	private String phone;
	private String role;
	private String photo;
	private Integer status;
}
