package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityService;

@Repository
public interface RepositoryService extends JpaRepository<EntityService, String> {
    java.util.Optional<EntityService> findByName(String name);
}
