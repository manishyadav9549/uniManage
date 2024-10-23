package com.erp.erp_backend.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.erp.erp_backend.model.User;
import com.erp.erp_backend.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;


    // Create a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Find user by ID
    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

//     Find user by username
    public User findUserByUserName(String username) {
        return userRepository.findByUsername(username);
    }

    // Update user
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setPassword(userDetails.getPassword());
        user.setEmail(userDetails.getEmail());
        user.setPhone(userDetails.getPhone());
        user.setRole(userDetails.getRole());
        user.setApplication_id(userDetails.getApplication_id());
//        user.setLastmodifiedBy();
        return userRepository.save(user);
    }

    // Delete user by ID
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ArrayList getUser(User loginData){
        ArrayList result = new ArrayList<>();
        String username = loginData.getUsername();
        String password = loginData.getPassword();
        User user = findUserByUserName(username);
        if (user.getPassword().equals(password)){
            result.add(user);
            return result;
        }
        else{
            result.add("Password didn't matched");
        }
        return result;
    }
}
