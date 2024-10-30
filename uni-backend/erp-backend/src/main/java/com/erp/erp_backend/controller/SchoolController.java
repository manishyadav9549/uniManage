package com.erp.erp_backend.controller;
import java.util.*;

import com.erp.erp_backend.model.School;
import com.erp.erp_backend.repository.SchoolRepository;
import com.erp.erp_backend.services.SchoolService;
import org.json.JSONException;
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

import com.erp.erp_backend.model.User;
import com.erp.erp_backend.services.UserService;
import org.json.JSONObject;

@RestController
@RequestMapping("/uniLogin")
public class SchoolController {

    @Autowired
    private UserService userService;

    @PostMapping("/user")
    public ArrayList<User> signIn(@RequestBody String loginData) throws JSONException {
        JSONObject jsonObject = new JSONObject(loginData);
        System.out.println("loginData"+ loginData);
        String username = jsonObject.getString("username");
        String password = jsonObject.getString("password");
        System.out.println("Manish uswe"+ username+ ", pass:"+ password);
        ArrayList user = userService.getUser(username, password);
        return user;
    }

    @PostMapping("/addUser")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = userService.createUser(user);
        return ResponseEntity.ok(newUser);
    }

    @GetMapping("user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return userService.findUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updatedUser = userService.updateUser(id, userDetails);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("user/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @Autowired
    private SchoolService schoolService;

    @PostMapping("/addApp")
    public boolean addApplication(@RequestBody School schoolInfo){
        System.out.println("School information: "+ schoolInfo);
        schoolService.createSchool(schoolInfo);
        return true;
    }

    @GetMapping("/schools")
    public List<School> getSchools(){
        return schoolService.getAllSchools();
    }
}

