package com.epiis.apibarbershop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.epiis.apibarbershop.entity.EntityUser;

@Repository
public interface RepositoryUser extends JpaRepository<EntityUser, String> {

	@org.springframework.data.jpa.repository.Query("SELECT u FROM EntityUser u WHERE u.email = ?1")
	java.util.List<EntityUser> _internalFindByEmail(String email);

	default Optional<EntityUser> findByEmail(String email) {
		return _internalFindByEmail(email).stream().findFirst();
	}
	Optional<EntityUser> findByPhone(String phone);
}
