package com.epiis.apibarbershop.staticdata;

public enum EnumAppointmentStatus {
	PENDING("Pendiente"),
	CONFIRMED("Confirmada"),
	CANCELLED("Cancelada"),
	FINISHED("Finalizada");

	private String value;

	EnumAppointmentStatus(String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		return this.value;
	}
}
