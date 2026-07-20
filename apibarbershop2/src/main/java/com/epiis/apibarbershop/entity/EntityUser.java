package com.epiis.apibarbershop.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tuser")
@Setter @Getter
public class EntityUser {
	@Id 
	@Column(name = "idUser") 
	
	private String idUser;
	@Column(name = "firstName") 
	
	private String firstName;
	@Column(name = "surName") 
	
	private String surName;
	@Column(name = "email") 
	
	private String email;
	@Column(name = "phone")
	
	private String phone;
	
	@Column(name = "password") 
	
	private String password;
	@Column(name = "role") 
	
	private String role;
	@Column(name = "photo", columnDefinition = "LONGTEXT") 
	
	private String photo;
	@Column(name = "status")
	
	private Integer status;
	@Column(name = "createdAt")
	
	private Date createdAt;
	@Column(name = "updatedAt")
	
	private Date updatedAt;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany(mappedBy = "parentUser", cascade = CascadeType.ALL)
	private List<EntityBarberSchedule> childBarberSchedule;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany(mappedBy = "parentUser", cascade = CascadeType.ALL)
	private List<EntityAppointment> childAppointment;
}
