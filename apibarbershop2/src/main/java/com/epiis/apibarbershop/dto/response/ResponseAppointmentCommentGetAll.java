package com.epiis.apibarbershop.dto.response;

import java.util.List;

import com.epiis.apibarbershop.entity.EntityAppointmentComment;
import com.epiis.apibarbershop.generic.ResponseGeneric;

public class ResponseAppointmentCommentGetAll extends ResponseGeneric {
	public List<EntityAppointmentComment> listComment;
}
