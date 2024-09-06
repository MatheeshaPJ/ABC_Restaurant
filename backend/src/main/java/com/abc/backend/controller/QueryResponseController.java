package com.abc.backend.controller;

import com.abc.backend.model.QueryResponse;
import com.abc.backend.repository.QueryResposeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class QueryResponseController {

    @Autowired
    private QueryResposeRepository queryResposeRepository;

    @PostMapping("/queryresponse/create")
    QueryResponse newQueryResponse(@RequestBody QueryResponse newQueryResponse){
        return queryResposeRepository.save(newQueryResponse);
    }

}
