package com.epiis.apibarbershop.dto.response;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseUserInsert extends ResponseGeneric {
	private String idUser;
	
	public String getIdUser() { return idUser; }
	public void setIdUser(String idUser) { this.idUser = idUser; }
}
