package com.erp.erp_backend.controller;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
@RequestMapping("/uniLogin")
public class UserController {

    @PostMapping("/user")
    public String signIn(@RequestBody String loginData) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            JsonNode jsonNode = objectMapper.readTree(loginData);
            String userName = jsonNode.get("username").asText();
            String password = jsonNode.get("password").asText();
            System.out.println("Username: "+ userName);
            System.out.println("Password: "+ password);
            Map<String, Object> jsonObject = new HashMap<>();
            jsonObject.put("name", "John Doe");
            jsonObject.put("age", 30);

            // Step 2: Add a new value
            jsonObject.put("city", "New York");

            // Optional: If you need to remove a value
            // jsonObject.remove("age");

            // Step 3: Convert Map to JSON String
            String jsonString = objectMapper.writeValueAsString(jsonObject);
            System.out.println("Updated JSON: " + jsonString);

            // Logic based on userType
//            if ("student".equals(userName)) {
                // Logic to get fetch data regarding username
                return jsonString;
//            }

        } catch (IOException e) {
            e.printStackTrace();
            return "Error parsing login data";
        }

//        return "Invalid User";
    }
}

