package com.epiis.apibarbershop.entity;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tservice")
@Setter @Getter
public class EntityService {
	@Id @Column
	(name = "idService") private String idService;
	@Column
	(name = "name") private String name;
	@Column
	(name = "description") private String description;
	@Column
	(name = "price") private BigDecimal price;
	@Column
	(name = "durationMinutes") private Integer durationMinutes;
	@Column(name = "image", columnDefinition = "LONGTEXT") private String image;
	@Column
	(name = "status") private Integer status;
	@Column
	(name = "createdAt") private Date createdAt;
	@Column
	(name = "updatedAt") private Date updatedAt;
	
	@com.fasterxml.jackson.annotation.JsonIgnore
	@OneToMany(mappedBy = "parentService", cascade = CascadeType.ALL)
	private List<EntityAppointmentDetail> childAppointmentDetail;
}
