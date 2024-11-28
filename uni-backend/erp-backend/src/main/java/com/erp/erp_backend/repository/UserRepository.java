package com.erp.erp_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erp.erp_backend.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    // This method finds a User by their username (String)
     Optional<User> findByPhone(String phone);

//    void deleteById(String id);
}
