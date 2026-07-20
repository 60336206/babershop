package com.epiis.apibarbershop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityUser;

@Repository
public interface RepositoryUser extends JpaRepository<EntityUser, String> {

	Optional<EntityUser> findByEmail(String email);
	Optional<EntityUser> findByPhone(String phone);
}
