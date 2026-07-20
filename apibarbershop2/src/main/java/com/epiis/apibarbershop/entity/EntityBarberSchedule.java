package com.epiis.apibarbershop.entity;

import java.sql.Time;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tbarberschedule")
@Setter @Getter
public class EntityBarberSchedule {
	@Id 
	@Column
	(name = "idBarberSchedule") 
	private String idBarberSchedule;
	@Column
	(name = "idUser") 
	private String idUser;
	@Column
	(name = "dayName") 
	private String dayName;
	@Column
	(name = "startHour") 
	private Time startHour;
	@Column
	(name = "endHour")
	private Time endHour;
	@Column
	(name = "status")
	private Integer status;
	@Column
	(name = "createdAt")
	private Date createdAt;
	@Column
	(name = "updatedAt") 
	private Date updatedAt;

	@com.fasterxml.jackson.annotation.JsonIgnore
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "idUser", insertable = false, updatable = false)
	private EntityUser parentUser;
}
