package com.epiis.apibarbershop.staticdata;

public enum EnumPaymentStatus {
	PAID("Pagado"),
	PENDING("Pendiente");

	private String value;

	EnumPaymentStatus(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
}
