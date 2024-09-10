package com.abc.backend.repository;

import com.abc.backend.model.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface RestaurantTableRepository extends JpaRepository<RestaurantTable, Long> {
    // Find all tables except those with the specified tableIds
    List<RestaurantTable> findByTableIdNotIn(List<Long> reservedTableIds);

    // Query to find tables for a given location
    List<RestaurantTable> findByLocation(String location);

}
