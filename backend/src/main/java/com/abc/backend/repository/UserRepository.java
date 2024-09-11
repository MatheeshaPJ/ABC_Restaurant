package com.abc.backend.repository;

import com.abc.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {

    // Fetch user by their ID
    User findByUserId(Long userId);

    // Find a user by their email (used for authentication)
    Optional<User> findByEmail(String email);

    // Find all users by role (useful for displaying lists of admins, staff, etc.)
    List<User> findByRole(String role);

    // Check if a user with the given email exists (useful for registration)
    boolean existsByEmail(String email);

    // Find users by part of their first name (useful for search functionality)
    List<User> findByFirstNameContainingIgnoreCase(String firstName);

}
