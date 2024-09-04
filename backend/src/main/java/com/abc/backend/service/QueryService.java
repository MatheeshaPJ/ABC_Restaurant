package com.abc.backend.service;

import com.abc.backend.model.Query;
import com.abc.backend.repository.QueryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QueryService {


    @Autowired
    private QueryRepository queryRepository;

    public Query submitQuery(Query query) {
        return queryRepository.save(query);
    }

    public List<Query> getQueriesByUserId(Long userId) {
        return queryRepository.findByUserId(userId);
    }

    public void updateQueryStatus(Long queryId, String status) {
        Query query = queryRepository.findById(queryId).orElseThrow(() -> new RuntimeException("Query not found"));
        query.setStatus(status);
        queryRepository.save(query);
    }

}
