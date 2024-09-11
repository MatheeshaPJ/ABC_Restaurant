package com.abc.backend.repository;


import com.abc.backend.model.DeliveryOrder;
import com.abc.backend.model.DeliveryOrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeliveryOrderItemRepository extends JpaRepository<DeliveryOrderItem, Long> {

    // Fetch all order items by order ID
    List<DeliveryOrderItem> findByOrderId(DeliveryOrder orderId);

}
