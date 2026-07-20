package com.epiis.apibarbershop.business;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.epiis.apibarbershop.dto.request.RequestPaymentInsert;
import com.epiis.apibarbershop.dto.response.*;
import com.epiis.apibarbershop.entity.EntityPayment;
import com.epiis.apibarbershop.repository.RepositoryPayment;
import com.epiis.apibarbershop.staticdata.EnumPaymentStatus;

@Service
public class BusinessPayment {
	private final RepositoryPayment repositoryPayment;

	public BusinessPayment(RepositoryPayment repositoryPayment) {
		this.repositoryPayment = repositoryPayment;
	}

	public ResponsePaymentInsert insert(RequestPaymentInsert request) {
		ResponsePaymentInsert response = new ResponsePaymentInsert();

		Date now = new Date();

		EntityPayment entity = new EntityPayment();
		entity.setIdPayment(UUID.randomUUID().toString());
		entity.setIdAppointment(request.getIdAppointment());
		entity.setAmount(request.getAmount());
		entity.setPaymentMethod(request.getPaymentMethod());
		entity.setStatus(EnumPaymentStatus.PAID.toString());
		entity.setTransactionDate(now);
		entity.setCreatedAt(now);
		entity.setUpdatedAt(now);

		repositoryPayment.save(entity);

		response.success();
		response.listMessage.add("Pago registrado correctamente.");
		return response;
	}

	public ResponsePaymentGetAll getall() {
		ResponsePaymentGetAll response = new ResponsePaymentGetAll();
		response.listPayment = repositoryPayment.findAll();
		response.success();
		response.listMessage.add("Listado obtenido correctamente.");
		return response;
	}
}
