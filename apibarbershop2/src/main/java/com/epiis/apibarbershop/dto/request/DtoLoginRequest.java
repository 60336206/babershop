package com.epiis.apibarbershop.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DtoLoginRequest {

	private String email;
	private String password;
}
