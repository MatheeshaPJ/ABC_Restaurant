package com.abc.backend.controller;

import com.abc.backend.model.ResturantTable;
import com.abc.backend.repository.TableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TableController {

    @Autowired
    private TableRepository tableRepository;

    @PostMapping("/table/create")
    ResturantTable newTable(@RequestBody ResturantTable newResturantTable){
        return tableRepository.save(newResturantTable);
    }

}
