package com.epiis.apibarbershop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityAppointment;

@Repository
public interface RepositoryAppointment extends JpaRepository<EntityAppointment, String> {
	List<EntityAppointment> findByIdUser(String idUser);
	List<EntityAppointment> findByIdUserAndAppointmentDate(String idUser, java.sql.Date appointmentDate);
}
