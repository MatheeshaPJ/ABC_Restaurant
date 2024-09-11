package com.abc.backend.controller;

import com.abc.backend.exception.UserNotFoundException;
import com.abc.backend.model.User;
import com.abc.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    // Register a new user
    @PostMapping("/user/register")
    public ResponseEntity<User> registerUser(@RequestBody User newUser) {
        User user = userService.registerUser(newUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    // Get all users
    @GetMapping("/user/getallusers")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    // Get user by ID
    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Update user by ID
    @PutMapping("/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User newUser, @PathVariable Long id) {
        User updatedUser = userService.updateUser(newUser, id);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    // Delete user by ID
    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return new ResponseEntity<>("User with ID " + id + " has been deleted successfully.", HttpStatus.OK);
    }

    // Login user
    @PostMapping("/user/login")
    public ResponseEntity<User> loginUser(@RequestBody User loginUser) {
        User user = userService.loginUser(loginUser.getEmail(), loginUser.getPassword());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}
