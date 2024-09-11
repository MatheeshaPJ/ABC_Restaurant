package com.abc.backend.repository;

import com.abc.backend.model.DeliveryOrder;
import com.abc.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryOrderRepository extends JpaRepository<DeliveryOrder, Long> {

    // Fetch all orders for a specific customer
    List<DeliveryOrder> findByCustomerId(User customerId);

    // Find an order by ID
    DeliveryOrder findByOrderId(Long orderId);

}
