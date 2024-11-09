package com.erp.erp_backend.repository;

import com.erp.erp_backend.model.School;
import org.springframework.data.jpa.repository.JpaRepository;


public interface SchoolRepository extends JpaRepository<School, String> {
//    Optional<School> findByName(String name);
}
