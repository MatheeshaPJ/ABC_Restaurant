package com.abc.backend.service;

import com.abc.backend.exception.UserNotFoundException;
import com.abc.backend.model.User;
import com.abc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

   // @Autowired
   // private BCryptPasswordEncoder bCryptPasswordEncoder;


    public User registerUser(User user) {
        //user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User findByUserId(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + userId));
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
                //.orElseThrow(() -> new UserNotFoundException("User not found with username: " + username));
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
               // .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
    }

    public User updateUser(Long userId, User userDetails) {
        User user = findByUserId(userId);
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setPhoneNumber(userDetails.getPhoneNumber());
        user.setAddress(userDetails.getAddress());
        return userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        User user = findByUserId(userId);
        userRepository.delete(user);
    }
}
