package com.epiis.apibarbershop.entity;

import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tappointment")
@Setter @Getter
public class EntityAppointment {
	@Id 
	@Column
	(name = "idAppointment") 
	private String idAppointment;
	@Column
	(name = "idCustomer")
	private String idCustomer;
	@Column
	(name = "idUser") 
	private String idUser;
	@Column
	(name = "appointmentDate") 
	private Date appointmentDate;
	@Column
	(name = "startHour")
	private Time startHour;
	@Column
	(name = "endHour") 
	private Time endHour;
	@Column
	(name = "total") 
	private BigDecimal total;
	@Column
	(name = "status") 
	private String status;
	@Column
	(name = "observation")
	private String observation;
	@Column
	(name = "createdAt") 
	private java.util.Date createdAt;
	@Column
	(name = "updatedAt") 
	private java.util.Date updatedAt;

	@ManyToOne
	(fetch = FetchType.LAZY)
	@JoinColumn
	(name = "idCustomer", insertable = false, updatable = false)
	private EntityCustomer parentCustomer;

	@ManyToOne
	(fetch = FetchType.LAZY)
	@JoinColumn
	(name = "idUser", insertable = false, updatable = false)
	private EntityUser parentUser;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany
	(mappedBy = "parentAppointment", cascade = CascadeType.ALL)
	private List<EntityAppointmentDetail> childAppointmentDetail;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany
	(mappedBy = "parentAppointment", cascade = CascadeType.ALL)
	private List<EntityPayment> childPayment;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany
	(mappedBy = "parentAppointment", cascade = CascadeType.ALL)
	private List<EntityAppointmentFile> childAppointmentFile;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany
	(mappedBy = "parentAppointment", cascade = CascadeType.ALL)
	private List<EntityAppointmentComment> childAppointmentComment;
}
