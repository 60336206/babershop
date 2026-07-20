package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityService;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseServiceGetAll extends ResponseGeneric {
	public List<EntityService> listService;
}
