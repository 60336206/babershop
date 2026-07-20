package com.epiis.apibarbershop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityBarberSchedule;

@Repository
public interface RepositoryBarberSchedule extends JpaRepository<EntityBarberSchedule, String> {
	List<EntityBarberSchedule> findByIdUser(String idUser);
	List<EntityBarberSchedule> findByIdUserAndDayName(String idUser, String dayName);
}
