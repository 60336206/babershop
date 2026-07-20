package com.epiis.apibarbershop.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tgallery")
@Setter @Getter
public class EntityGallery {
	@Id 
	@Column(name = "idGallery") 
	private String idGallery;
	@Column(name = "title") 
	private String title;
	@Column(name = "image", columnDefinition = "LONGTEXT")
	private String image;
	@Column(name = "description") 
	private String description;
	@Column
	(name = "createdAt") 
	private Date createdAt;
	@Column
	(name = "updatedAt")
	private Date updatedAt;
}
