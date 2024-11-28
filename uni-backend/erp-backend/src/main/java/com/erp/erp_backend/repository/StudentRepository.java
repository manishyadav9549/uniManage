package com.erp.erp_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erp.erp_backend.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
