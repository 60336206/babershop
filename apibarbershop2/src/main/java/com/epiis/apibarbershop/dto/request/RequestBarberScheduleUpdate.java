package com.epiis.apibarbershop.dto.request;
import lombok.Getter; import lombok.Setter;
@Getter @Setter
public class RequestBarberScheduleUpdate {
	private String idBarberSchedule;
	private String dayName;
	private String startHour;
	private String endHour;
}
