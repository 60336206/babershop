package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityPayment;

@Repository
public interface RepositoryPayment extends JpaRepository<EntityPayment, String> {}
