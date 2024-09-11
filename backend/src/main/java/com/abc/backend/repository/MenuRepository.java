package com.abc.backend.repository;

import com.abc.backend.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    // Fetch menu item by ID
    Menu findByMenuId(Long menuId);

}
