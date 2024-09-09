package com.abc.backend.controller;

import com.abc.backend.model.RestaurantTable;
import com.abc.backend.service.RestaurantTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class RestaurantTableController {

    @Autowired
    private RestaurantTableService tableService;

    // Get all tables
    @GetMapping("/table/getalltables")
    public List<RestaurantTable> getAllTables() {
        return tableService.getAllTables();
    }

    // Get table by ID
    @GetMapping("/table/{id}")
    public ResponseEntity<RestaurantTable> getTableById(@PathVariable Long id) {
        RestaurantTable table = tableService.getTableById(id).orElse(null);
        if (table == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(table);
    }

    // Create a new table
    @PostMapping("/table/create")
    public RestaurantTable createTable(@RequestBody RestaurantTable table) {
        return tableService.createTable(table);
    }

    // Update a table
    @PutMapping("/table/update/{id}")
    public ResponseEntity<RestaurantTable> updateTable(@PathVariable Long id, @RequestBody RestaurantTable tableDetails) {
        try {
            RestaurantTable updatedTable = tableService.updateTable(id, tableDetails);
            return ResponseEntity.ok(updatedTable);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a table
    @DeleteMapping("/table/delete/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        try {
            tableService.deleteTable(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
