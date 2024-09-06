package com.abc.backend.controller;

import com.abc.backend.model.Query;
import com.abc.backend.repository.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QueryController {

    @Autowired
    private QueryRepository queryRepository;

    @PostMapping("/query/create")
    Query newQuery(@RequestBody Query newQuery){
        return queryRepository.save(newQuery);
    }




}
