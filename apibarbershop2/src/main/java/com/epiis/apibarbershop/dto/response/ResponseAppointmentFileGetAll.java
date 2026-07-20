package com.epiis.apibarbershop.dto.response;

import java.util.List;

import com.epiis.apibarbershop.entity.EntityAppointmentFile;
import com.epiis.apibarbershop.generic.ResponseGeneric;

public class ResponseAppointmentFileGetAll extends ResponseGeneric {
	public List<EntityAppointmentFile> listFile;
}
