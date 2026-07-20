package com.epiis.apibarbershop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.epiis.apibarbershop.entity.EntityGallery;

@Repository
public interface RepositoryGallery extends JpaRepository<EntityGallery, String> {}
