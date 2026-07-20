package com.epiis.apibarbershop.entity;

import java.math.BigDecimal;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tappointmentdetail")
@Setter @Getter
public class EntityAppointmentDetail {
	@Id @Column
	(name = "idAppointmentDetail") 
	private String idAppointmentDetail;
	@Column
	(name = "idAppointment") 
	private String idAppointment;
	@Column
	(name = "idService")
	private String idService;
	@Column
	(name = "price")
	private BigDecimal price;
	@Column
	(name = "createdAt") 
	private Date createdAt;
	@Column
	(name = "updatedAt")
	private Date updatedAt;

	@ManyToOne
	(fetch = FetchType.LAZY)
	@JoinColumn
	(name = "idAppointment", insertable = false, updatable = false)
	private EntityAppointment parentAppointment;

	@ManyToOne
	(fetch = FetchType.LAZY)
	@JoinColumn
	(name = "idService", insertable = false, updatable = false)
	private EntityService parentService;
}
