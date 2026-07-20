package com.epiis.apibarbershop.dto.request;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestCustomerInsert {
	private String firstName;
	private String surName;
	private String phone;
	private String email;
}
