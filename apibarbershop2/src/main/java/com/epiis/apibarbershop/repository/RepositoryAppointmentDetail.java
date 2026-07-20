package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityAppointmentDetail;

@Repository
public interface RepositoryAppointmentDetail extends JpaRepository<EntityAppointmentDetail, String> {}
