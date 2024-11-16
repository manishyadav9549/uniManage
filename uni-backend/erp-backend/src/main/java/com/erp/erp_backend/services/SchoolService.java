package com.erp.erp_backend.services;

import com.erp.erp_backend.model.School;
import com.erp.erp_backend.repository.SchoolRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.erp.erp_backend.dto.AddAppDto;

import java.util.List;
import java.util.Optional;

@Service
public class SchoolService {
    @Autowired
    SchoolRepository schoolRepository;

    // Create a new Application
    public AddAppDto createSchool(School school) {
        AddAppDto addAppDto = new AddAppDto();
        try{
            schoolRepository.save(school);
            addAppDto.setMsg("Msg: School Added");
            addAppDto.setStatus(true);
            return addAppDto;
        } catch (Exception e) {
            addAppDto.setMsg("Msg"+ e);
            addAppDto.setStatus(false);
            return addAppDto;
        }
    }

    public List<School> getAllSchools() {
        return schoolRepository.findAll();
    }

    public Optional<School> getSchool(String school_id){
        return schoolRepository.findById(school_id);
    }
}
