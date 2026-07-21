package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityCustomer;

@Repository
public interface RepositoryCustomer extends JpaRepository<EntityCustomer, String> {
    @org.springframework.data.jpa.repository.Query("SELECT c FROM EntityCustomer c WHERE c.email = ?1")
    java.util.List<EntityCustomer> _internalFindByEmail(String email);

    default java.util.Optional<EntityCustomer> findByEmail(String email) {
        return _internalFindByEmail(email).stream().findFirst();
    }
    java.util.Optional<EntityCustomer> findByPhone(String phone);
}
