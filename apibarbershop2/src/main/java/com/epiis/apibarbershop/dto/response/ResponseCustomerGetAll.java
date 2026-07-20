package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityCustomer;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponseCustomerGetAll extends ResponseGeneric {
	public List<EntityCustomer> listCustomer;
}
