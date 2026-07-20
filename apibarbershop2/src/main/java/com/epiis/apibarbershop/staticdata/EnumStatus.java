package com.epiis.apibarbershop.staticdata;

public enum EnumStatus {
	ACTIVE(1),
	INACTIVE(0);

	private int value;

	EnumStatus(int value) {
		this.value = value;
	}

	public int getValue() {
		return this.value;
	}
}
