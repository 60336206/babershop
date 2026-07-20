package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityUser;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseUserGetAll extends ResponseGeneric {
	public List<EntityUser> listUser;
}
