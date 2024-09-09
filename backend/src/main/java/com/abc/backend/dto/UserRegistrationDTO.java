//package com.abc.backend.dto;
//
//import javax.validation.constraints.Email;
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.Size;
//
//import com.abc.backend.model.USER_ROLE;
//
//public class UserRegistrationDTO {
//
//    @NotEmpty(message = "Email is required")
//    @Email(message = "Invalid email format")
//    private String email;
//
//    @NotEmpty(message = "First name is required")
//    @Size(min = 2, message = "First name must have at least 2 characters")
//    private String firstName;
//
//    @NotEmpty(message = "Last name is required")
//    private String lastName;
//
//    @NotEmpty(message = "Password is required")
//    @Size(min = 8, message = "Password must have at least 8 characters")
//    private String password;
//
//    private String address;
//
//    @NotEmpty(message = "Role is required")
//    private USER_ROLE role;
//
//
//    // Getters and setters
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//
//    public String getAddress() {
//        return address;
//    }
//
//    public void setAddress(String address) {
//        this.address = address;
//    }
//
//    public USER_ROLE getRole() {
//        return role;
//    }
//
//    public void setRole(USER_ROLE role) {
//        this.role = role;
//    }
//}
