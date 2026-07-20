package com.epiis.apibarbershop.dto.request;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RequestAppointmentCommentInsert {
	private String idAppointment;
	private String idUser;
	private String description;
}
