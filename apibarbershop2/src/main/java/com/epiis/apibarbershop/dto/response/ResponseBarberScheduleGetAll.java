package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityBarberSchedule;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseBarberScheduleGetAll extends ResponseGeneric {
	public List<EntityBarberSchedule> listBarberSchedule;
}
