package com.abc.backend.service;

import com.abc.backend.model.RestaurantTable;
import com.abc.backend.repository.RestaurantTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantTableService {

    @Autowired
    private RestaurantTableRepository tableRepository;

    // Get all tables
    public List<RestaurantTable> getAllTables() {
        return tableRepository.findAll();
    }

    // Get a table by id
    public Optional<RestaurantTable> getTableById(Long id) {
        return tableRepository.findById(id);
    }

    // Create a new table
    public RestaurantTable createTable(RestaurantTable table) {
        return tableRepository.save(table);
    }

    // Update an existing table
    public RestaurantTable updateTable(Long id, RestaurantTable tableDetails) {
        RestaurantTable table = tableRepository.findById(id).orElseThrow(() -> new RuntimeException("Table not found"));
        table.setTableNo(tableDetails.getTableNo());
        table.setSeatCount(tableDetails.getSeatCount());
        return tableRepository.save(table);
    }

    // Delete a table
    public void deleteTable(Long id) {
        tableRepository.deleteById(id);
    }
}
