package com.epiis.apibarbershop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityAppointmentFile;

@Repository
public interface RepositoryAppointmentFile extends JpaRepository<EntityAppointmentFile, String> {
	List<EntityAppointmentFile> findByIdAppointment(String idAppointment);
}
