package com.epiis.apibarbershop.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tappointmentcomment")
@Setter @Getter
public class EntityAppointmentComment {
	@Id @Column
	(name = "idAppointmentComment") 
	private String idAppointmentComment;
	@Column
	(name = "idAppointment") 
	private String idAppointment;
	@Column
	(name = "idUser")
	private String idUser;
	@Column
	(name = "description")
	private String description;
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
	(name = "idUser", insertable = false, updatable = false)
	private EntityUser parentUser;
}
