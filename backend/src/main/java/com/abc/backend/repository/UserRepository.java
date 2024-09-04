package com.abc.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.abc.backend.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User findByEmail(String email);

}



