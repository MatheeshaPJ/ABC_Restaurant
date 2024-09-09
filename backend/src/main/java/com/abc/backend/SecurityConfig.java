//package com.abc.backend;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class SecurityConfig implements WebMvcConfigurer {
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//                .csrf(csrf -> csrf.disable()) // Disable CSRF protection
//                .authorizeHttpRequests(authz -> authz
//                        .requestMatchers("/user/register", "/user/login").permitAll() // Publicly accessible routes
//                        .requestMatchers("/admin/**").hasRole("ADMIN") // Admin-specific routes
//                        .requestMatchers("/staff/**").hasRole("STAFF") // Staff-specific routes
//                        .anyRequest().authenticated() // All other routes require authentication
//                )
//                .formLogin(form -> form
//                        .loginPage("/login") // Custom login page
//                        .permitAll() // Allow everyone to access the login page
//                )
//                .logout(logout -> logout
//                        .logoutUrl("/logout") // Logout URL
//                        .invalidateHttpSession(true) // Invalidate session on logout
//                        .deleteCookies("JSESSIONID") // Delete session cookie
//                        .permitAll() // Allow access to the logout URL
//                )
//                .sessionManagement(session -> session
//                        .maximumSessions(1) // Allow only one session per user
//                        .expiredUrl("/login?expired") // Redirect if session expires
//                );
//
//        return http.build();
//    }
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000") // Frontend origin
//                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow OPTIONS method for preflight
//                .allowedHeaders("*")
//                .allowCredentials(true); // Allow cookies and credentials
//    }
//}
