package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityCustomer;

@Repository
public interface RepositoryCustomer extends JpaRepository<EntityCustomer, String> {
    java.util.Optional<EntityCustomer> findByEmail(String email);
    java.util.Optional<EntityCustomer> findByPhone(String phone);
}
