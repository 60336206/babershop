package com.epiis.apibarbershop.staticdata;

public enum EnumUserRole {
	ADMIN("ADMIN"),
	BARBER("BARBER");

	private final String value;

	EnumUserRole(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
}
