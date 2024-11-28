package com.erp.erp_backend.model;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Long studentId;

    @Column(name = "class_id", nullable = false)
    private Integer classId;

    @Column(name = "name", length = 100, nullable = false)
    private String name;

    @Column(name = "roll_number", length = 10, nullable = false)
    private String rollNumber;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name = "gender", length = 1)
    private String gender;

    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "email", length = 100)
    private String email;

    @Column(name = "siblings_id", length = 50)
    private String siblingsId;

    @Column(name = "created_at", nullable = false, updatable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private LocalDateTime createdAt;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "school_id", length = 50)
    private String schoolId;

    @Column(name = "photo_url", length = 100)
    private String photoUrl;

    @Column(name = "guardian_name", length = 100, nullable = false)
    private String guardianName;


}
