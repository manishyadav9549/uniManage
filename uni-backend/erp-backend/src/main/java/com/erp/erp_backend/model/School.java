package com.erp.erp_backend.model;
import  jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "schools")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class School {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Sid;

    @Column(name = "id", length = 50)
    private String id;

    @Column(length = 255, nullable = false)
    private String name;

    @Column(length = 255)
    private String address;

    @Column(length = 100, nullable = false)
    private String city;

    @Column(length = 100)
    private String state;

    @Column(length = 20)
    private String postalCode;

    @Column(length = 50, nullable = false)
    private String country;

    @Column(length = 20)
    private String phone;

    @Column(length = 100)
    private String gmail;

    @Column(length = 100)
    private String district;

    @Column(name = "principal_name", length = 100)
    private String principalName;

    @Column(name = "established_year")
    private Integer establishedYear;

    @Column(name = "board_affiliation", length = 100)
    private String boardAffiliation;

    @Column(name = "student_capacity")
    private Integer studentCapacity;

    @Column(name = "current_student_count")
    private Integer currentStudentCount;

    @Column(name = "website_url", length = 255)
    private String websiteUrl;

    @Column(name = "last_updated")
    private LocalDateTime lastUpdated = LocalDateTime.now();

    @Column(name = "applicationtype")
    private String applicationType;
}
