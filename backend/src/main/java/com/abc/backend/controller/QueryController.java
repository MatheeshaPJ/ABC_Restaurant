package com.abc.backend.controller;

import com.abc.backend.model.Query;
import com.abc.backend.service.QueryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/queries")
public class QueryController {

    @Autowired
    private QueryService queryService;

    @PostMapping
    public Query submitQuery(@RequestBody Query query) {
        return queryService.submitQuery(query);
    }

    @GetMapping("/user/{userId}")
    public List<Query> getQueriesByUserId(@PathVariable Long userId) {
        return queryService.getQueriesByUserId(userId);
    }

    @PutMapping("/{id}/status")
    public void updateQueryStatus(@PathVariable Long id, @RequestBody String status) {
        queryService.updateQueryStatus(id, status);
    }

}
