package com.epiis.apibarbershop.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tcustomer")
@Setter @Getter
public class EntityCustomer {
	@Id @Column(name = "idCustomer") private String idCustomer;
	@Column(name = "firstName") private String firstName;
	@Column(name = "surName") private String surName;
	@Column(name = "phone") private String phone;
	@Column(name = "email") private String email;
	@Column(name = "password") private String password;
	@Column(name = "status") private Integer status;
	@Column(name = "createdAt") private Date createdAt;
	@Column(name = "updatedAt") private Date updatedAt;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany(mappedBy = "parentCustomer", cascade = CascadeType.ALL)
	private List<EntityAppointment> childAppointment;
}
