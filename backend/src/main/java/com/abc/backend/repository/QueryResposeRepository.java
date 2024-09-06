package com.abc.backend.repository;

import com.abc.backend.model.QueryResponse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QueryResposeRepository extends JpaRepository<QueryResponse, Long> {
}
