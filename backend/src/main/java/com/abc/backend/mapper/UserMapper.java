package com.abc.backend.mapper;

import com.abc.backend.dto.UserDTO;
import com.abc.backend.dto.UserRegistrationDTO;
import com.abc.backend.model.User;

public class UserMapper {

    // Convert User Entity to UserDTO
    public static UserDTO toUserDTO(User user) {
        UserDTO dto = new UserDTO();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setRole(user.getRole());
        dto.setAddress(user.getAddress());
        return dto;
    }

    // Convert UserRegistrationDTO to User Entity
    public static User toUser(UserRegistrationDTO userRegistrationDTO) {
        User user = new User();
        user.setEmail(userRegistrationDTO.getEmail());
        user.setFirstName(userRegistrationDTO.getFirstName());
        user.setLastName(userRegistrationDTO.getLastName());
        user.setPassword(userRegistrationDTO.getPassword());  // Password encryption happens in the controller
        user.setRole(userRegistrationDTO.getRole());
        user.setAddress(userRegistrationDTO.getAddress());
        return user;
    }

}

