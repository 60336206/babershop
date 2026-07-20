package com.epiis.apibarbershop.entity;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tpayment")
@Setter @Getter
public class EntityPayment {
	
	@Id @Column
	(name = "idPayment") private String idPayment;
	
	@Column
	(name = "idAppointment") private String idAppointment;
	
	@Column
	(name = "amount") private BigDecimal amount;
	
	@Column
	(name = "paymentMethod") private String paymentMethod;
	
	@Column
	(name = "status") private String status;
	
	@Column
	(name = "transactionDate") private Date transactionDate;
	
	@Column
	(name = "createdAt") private Date createdAt;
	@Column
	(name = "updatedAt") private Date updatedAt;

	@ManyToOne
	(fetch = FetchType.LAZY)
	@JoinColumn
	(name = "idAppointment", insertable = false, updatable = false)
	private EntityAppointment parentAppointment;
}
