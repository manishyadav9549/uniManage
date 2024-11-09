package com.erp.erp_backend.repository;

import com.erp.erp_backend.model.School;
import com.erp.erp_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<School, User> {
}
