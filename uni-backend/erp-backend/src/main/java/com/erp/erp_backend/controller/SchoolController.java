package com.erp.erp_backend.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.erp.erp_backend.dto.AddAppDto;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.erp.erp_backend.model.School;
import com.erp.erp_backend.model.User;
import com.erp.erp_backend.services.SchoolService;
import com.erp.erp_backend.services.UserService;

@RestController
@RequestMapping("/uniManage")
public class SchoolController {

    @Autowired
    private UserService userService;

    @PostMapping("/user") // Login RestCall 
    public ArrayList<User> signIn(@RequestBody String loginData) throws JSONException {
        JSONObject jsonObject = new JSONObject(loginData);
        ArrayList user = userService.getUser(jsonObject);
        return user;
    }

    @PostMapping("/addUser") // To add a user
    public ResponseEntity<User> createUser(@RequestBody User user) {
        System.out.println("User: "+ user);
        User newUser = userService.createUser(user);
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("user/{id}") // Find specific school
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("user/{id}") // To modify any school
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("user/{id}") // To delete any school
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users") // To get schools admin list
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @Autowired
    private SchoolService schoolService;

    @PostMapping("/addApp") // To add school
    public AddAppDto addApplication(@RequestBody School schoolInfo){
        System.out.println("School information: "+ schoolInfo);
        return schoolService.createSchool(schoolInfo);
    }

    @GetMapping("/schools") // Get All Schools list
    public List<School> getSchools(){
        return schoolService.getAllSchools();
    }

    @DeleteMapping("school/{schoolid}") // To delete any school
    public ResponseEntity<Void> deleteUser(@PathVariable String schoolID) {
        userService.deleteUser(schoolID);
        return ResponseEntity.noContent().build();
    }
}

