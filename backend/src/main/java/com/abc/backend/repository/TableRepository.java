package com.abc.backend.repository;

import com.abc.backend.model.ResturantTable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TableRepository extends JpaRepository<ResturantTable, Long> {
}
