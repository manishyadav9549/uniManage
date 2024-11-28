package com.erp.erp_backend.services;

import com.erp.erp_backend.dto.AddStudent;
import com.erp.erp_backend.model.Student;
import com.erp.erp_backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
    @Autowired
    StudentRepository studentRepository;
    // Create add student
    public AddStudent addNewStd(Student studentInfo){
        AddStudent addNewStd = new AddStudent();
        try{
            studentRepository.save(studentInfo);
            addNewStd.setMsg("Msg: Student Added Successfully");
            addNewStd.setStatus(true);
            return addNewStd;
        } catch (Exception e) {
            addNewStd.setMsg("Msg"+ e);
            addNewStd.setStatus(false);
            return addNewStd;
        }
    }
}
