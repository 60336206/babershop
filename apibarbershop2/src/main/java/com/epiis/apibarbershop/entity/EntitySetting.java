package com.epiis.apibarbershop.entity;

import java.sql.Time;
import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tsetting")
@Setter @Getter
public class EntitySetting {
	@Id @Column
	(name = "idSetting")
	private String idSetting;
	@Column
	(name = "businessName") 
	private String businessName;
	@Column(name = "address")
	private String address;
	@Column(name = "phone") 
	private String phone;
	@Column(name = "email") 
	private String email;
	@Column(name = "logo", columnDefinition = "LONGTEXT") 
	private String logo;
	@Column(name = "openHour")
	private Time openHour;
	@Column(name = "closeHour") 
	private Time closeHour;
	@Column(name = "createdAt")
	private Date createdAt;
	@Column(name = "updatedAt") 
	private Date updatedAt;
}
