package com.erp.erp_backend.repository;

import com.erp.erp_backend.model.School;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SchoolRepository extends JpaRepository<School, Long> {
//    Optional<School> findByName(String name);
}
