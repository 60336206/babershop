package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityAppointment;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseAppointmentGetAll extends ResponseGeneric {
	public List<EntityAppointment> listAppointment;
}
