package com.abc.backend.controller;

import com.abc.backend.dto.LoginDTO;
import com.abc.backend.dto.UserDTO;
import com.abc.backend.dto.UserRegistrationDTO;
import com.abc.backend.mapper.UserMapper;
import com.abc.backend.model.User;
import com.abc.backend.repository.UserRepository;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // Register a new user
    @PostMapping("/user/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDTO userRegistrationDTO) {
        if (userRegistrationDTO.getEmail() == null || userRegistrationDTO.getPassword() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email and password are required");
        }

        if (userRepository.findByEmail(userRegistrationDTO.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User with this email already exists");
        }

        // Convert DTO to Entity and encrypt the password
        User newUser = UserMapper.toUser(userRegistrationDTO);
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));

        // Save the user
        User savedUser = userRepository.save(newUser);

        // Convert saved user entity to DTO
        UserDTO savedUserDTO = UserMapper.toUserDTO(savedUser);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUserDTO);
    }

    // Get all users and return as UserDTOs
    @GetMapping("/user/getallusers")
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<User> users = userRepository.findAll();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
        }

        // Convert all users to DTOs
        List<UserDTO> userDTOs = users.stream()
                .map(UserMapper::toUserDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(userDTOs);
    }

    // Get user by ID and return as UserDTO
    @GetMapping("/user/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        UserDTO userDTO = UserMapper.toUserDTO(user.get());
        return ResponseEntity.ok(userDTO);
    }

    // Update a user by ID
    @PutMapping("/user/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody UserDTO updatedUserDTO) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        User user = existingUser.get();
        user.setFirstName(updatedUserDTO.getFirstName());
        user.setLastName(updatedUserDTO.getLastName());
        user.setAddress(updatedUserDTO.getAddress());
        user.setRole(updatedUserDTO.getRole());

        // Save the updated user
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(UserMapper.toUserDTO(savedUser));
    }

    // Delete a user by ID
    @DeleteMapping("/user/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }

        userRepository.deleteById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("User deleted successfully");
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> loginUser(@Valid @RequestBody LoginDTO loginDTO) {
        Optional<User> userOptional = userRepository.findByEmail(loginDTO.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();

            // Verify the password
            if (passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
                // Password is correct, proceed with login
                return ResponseEntity.ok("Login successful");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }


}
