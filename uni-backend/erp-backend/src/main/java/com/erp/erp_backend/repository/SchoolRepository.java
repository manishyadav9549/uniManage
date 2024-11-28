package com.erp.erp_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erp.erp_backend.model.School;


public interface SchoolRepository extends JpaRepository<School, Long> {
    // @Query("SELECT s FROM School s WHERE s.id = :id")
    Optional<School> findById(String id);
}
