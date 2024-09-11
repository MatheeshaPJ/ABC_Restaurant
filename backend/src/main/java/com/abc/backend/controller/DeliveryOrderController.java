package com.abc.backend.controller;

import com.abc.backend.model.DeliveryOrder;
import com.abc.backend.model.User;
import com.abc.backend.service.DeliveryOrderService;
import com.abc.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DeliveryOrderController {

    @Autowired
    private DeliveryOrderService deliveryOrderService;

    private UserService userService;

    // Endpoint to place an order
    @PostMapping("/order/place-order")
    public ResponseEntity<DeliveryOrder> placeOrder(
            @RequestBody DeliveryOrder order,
            @RequestBody List<Long> menuItemIds, // List of menu item IDs selected by the customer
            @RequestParam List<Long> quantities) { // List of quantities corresponding to menu item IDs

        try {
            DeliveryOrder placedOrder = deliveryOrderService.placeOrder(order, menuItemIds, quantities);
            return ResponseEntity.ok(placedOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Return error if something goes wrong
        }
    }

    // Endpoint to retrieve all orders for a specific customer
    @GetMapping("/order/customer/{customerId}")
    public ResponseEntity<List<DeliveryOrder>> getOrdersByCustomer(@PathVariable Long customerId) {

        User customer = userService.getUserById(customerId);

        List<DeliveryOrder> orders = deliveryOrderService.getOrdersByCustomer(customer);
        return ResponseEntity.ok(orders);
    }

    // Endpoint to get order by ID
    @GetMapping("/order/{orderId}")
    public ResponseEntity<DeliveryOrder> getOrderById(@PathVariable Long orderId) {
        DeliveryOrder order = deliveryOrderService.getOrderById(orderId);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoint to update order status
    @PutMapping("/order/{orderId}/status")
    public ResponseEntity<DeliveryOrder> updateOrderStatus(
            @PathVariable Long orderId,
            @RequestParam String status) { // e.g., CONFIRMED, READY-FOR-DELIVERY, etc.

        try {
            DeliveryOrder updatedOrder = deliveryOrderService.updateOrderStatus(orderId, status);
            return ResponseEntity.ok(updatedOrder);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Endpoint to get all orders (admin use case)
    @GetMapping("/order/all")
    public ResponseEntity<List<DeliveryOrder>> getAllOrders() {
        List<DeliveryOrder> allOrders = deliveryOrderService.getAllOrders();
        return ResponseEntity.ok(allOrders);
    }
}
