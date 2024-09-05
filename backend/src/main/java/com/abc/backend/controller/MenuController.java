package com.abc.backend.controller;

import com.abc.backend.model.Menu;
import com.abc.backend.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MenuController {

    @Autowired
    private MenuRepository menuRepository;

    @PostMapping("/menu/create")
    Menu newMenu(@RequestBody Menu newMenu){
        return menuRepository.save(newMenu);
    }

}
