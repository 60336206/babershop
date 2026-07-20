package com.epiis.apibarbershop.dto.response;
import java.util.List;
import com.epiis.apibarbershop.entity.EntityPayment;
import com.epiis.apibarbershop.generic.ResponseGeneric;
public class ResponsePaymentGetAll extends ResponseGeneric {
	public List<EntityPayment> listPayment;
}
