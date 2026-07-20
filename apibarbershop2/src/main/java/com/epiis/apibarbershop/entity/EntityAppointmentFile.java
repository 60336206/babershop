package com.epiis.apibarbershop.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tappointmentfile")
@Setter @Getter
public class EntityAppointmentFile {
	@Id @Column
	(name = "idAppointmentFile")
	private String idAppointmentFile;
	@Column
	(name = "idAppointment") 
	private String idAppointment;
	@Column
	(name = "fileName")
	private String fileName;
	@Column
	(name = "extension")
	private String extension;
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
}
