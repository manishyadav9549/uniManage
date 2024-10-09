package com.erp.erp_backend.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/erp")
public class UserController {

    @PostMapping("/signin")
    public String signin(String username, String password, String userType) {
        return "Valid user!";
    }
}
