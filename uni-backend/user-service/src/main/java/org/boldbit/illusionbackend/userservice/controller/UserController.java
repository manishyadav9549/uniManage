package org.boldbit.illusionbackend.userservice.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @PostMapping("/signup")
    public String createUser(String username, String password) {
        return "SignUp successful";
    }

    @PostMapping("/signin")
    public String login(String username, String password) {
        return "Login successful";
    }
}
