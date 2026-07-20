package com.epiis.apibarbershop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityAppointmentComment;

@Repository
public interface RepositoryAppointmentComment extends JpaRepository<EntityAppointmentComment, String> {
	List<EntityAppointmentComment> findByIdAppointment(String idAppointment);
}
