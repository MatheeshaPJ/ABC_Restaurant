package com.abc.backend.service;

import com.abc.backend.model.DeliveryOrder;
import com.abc.backend.model.User;
import com.abc.backend.repository.DeliveryOrderRepository;
import com.abc.backend.repository.MenuRepository;
import com.abc.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class DeliveryOrderService {

    @Autowired
    private DeliveryOrderRepository deliveryOrderRepository;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private DeliveryOrderItemService deliveryOrderItemService;

    @Autowired
    private UserRepository userRepository;

    // Place an order
    public DeliveryOrder placeOrder(DeliveryOrder order, List<Long> menuItemIds, List<Long> quantities) throws Exception {
        // Set the order timestamp
        order.setOrderTimestamp(LocalDateTime.now());

        // Set the user (Customer placing the order)
        order.setCustomerId(userRepository.findById(order.getCustomerId().getUserId())
                .orElseThrow(() -> new Exception("User not found")));

        // Save the initial order to get the orderId generated
        DeliveryOrder savedOrder = deliveryOrderRepository.save(order);

        // Add the order items
        deliveryOrderItemService.addOrderItems(savedOrder.getOrderId(), menuItemIds, quantities);

        // Calculate the final price and save the updated order
        double totalPrice = deliveryOrderItemService.calculateTotalPrice(savedOrder.getOrderId());
        savedOrder.setFinalPrice(totalPrice);

        // Update order status to PENDING (default)
        savedOrder.setStatus("PENDING");

        return deliveryOrderRepository.save(savedOrder);  // Save and return the final order
    }

    // Get all orders for a customer
    public List<DeliveryOrder> getOrdersByCustomer(User customerId) {
        return deliveryOrderRepository.findByCustomerId(customerId);
    }

    // Get order by orderId
    public DeliveryOrder getOrderById(Long orderId) {
        return deliveryOrderRepository.findByOrderId(orderId);
    }

    // Update order status (e.g., CONFIRMED, READY-FOR-DELIVERY, etc.)
    public DeliveryOrder updateOrderStatus(Long orderId, String status) throws Exception {
        DeliveryOrder order = deliveryOrderRepository.findById(orderId)
                .orElseThrow(() -> new Exception("Order not found"));
        order.setStatus(status);
        return deliveryOrderRepository.save(order);
    }

    // Get all orders (Admin view)
    public List<DeliveryOrder> getAllOrders() {
        return deliveryOrderRepository.findAll();
    }
}
