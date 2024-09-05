package com.abc.backend.controller;

import com.abc.backend.model.User;
import com.abc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user/register")
    User newUser(@RequestBody User newUser){
        return userRepository.save(newUser);
    }

}
