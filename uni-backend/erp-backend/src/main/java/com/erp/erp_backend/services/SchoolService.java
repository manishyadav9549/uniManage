package com.erp.erp_backend.services;

import com.erp.erp_backend.model.School;
import com.erp.erp_backend.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SchoolService {
    @Autowired
    SchoolRepository schoolRepository;

    // Create a new Application
    public School createSchool(School school) {
        return schoolRepository.save(school);
    }

    public List<School> getAllSchools() {
        return schoolRepository.findAll();
    }

    public Optional<School> getSchool(String school_id){
        return schoolRepository.findById(school_id);
    }
}
