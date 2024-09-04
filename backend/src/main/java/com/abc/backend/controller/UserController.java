package com.abc.backend.controller;

//public class UserController {
//
//}
import com.abc.backend.model.User;
import com.abc.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("http://localhost:/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }

//    @PostMapping("/login")
//    public String loginUser(@RequestBody LoginRequest loginRequest) {
//        User user = userService.findByUsername(loginRequest.getUsername());
//        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
//            // Generate and return JWT token
//            return "JWT_TOKEN";
//        }
//        throw new RuntimeException("Invalid credentials");
//    }
}
