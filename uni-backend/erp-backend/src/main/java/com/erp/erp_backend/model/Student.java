package com.erp.erp_backend.model;

import jakarta.persistence.*;
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
    private Long student_id;

    @Column(length = 50)
    private String school_id;

    @Column(length = 10)
    private int class_id;

    @Column(length = 100)
    private String name;

    @Column(length = 100)
    private int roll_number;

}
