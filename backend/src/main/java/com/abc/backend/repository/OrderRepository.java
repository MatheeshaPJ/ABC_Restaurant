package com.abc.backend.repository;

import com.abc.backend.model.DeliveryOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<DeliveryOrder, Long> {
}
