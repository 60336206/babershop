package com.epiis.apibarbershop.dto.request;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestAppointmentUpdate {
	private String idAppointment;
	private String appointmentDate;
	private String startHour;
	private String endHour;
	private String status;
	private String observation;
}
