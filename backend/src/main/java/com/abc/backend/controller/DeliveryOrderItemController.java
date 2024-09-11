package com.abc.backend.controller;

import com.abc.backend.model.DeliveryOrderItem;
import com.abc.backend.service.DeliveryOrderItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DeliveryOrderItemController {

    @Autowired
    private DeliveryOrderItemService deliveryOrderItemService;

    // Endpoint to add items to an order (can be done during the order creation)
    @PostMapping("/order-items/add-items")
    public ResponseEntity<List<DeliveryOrderItem>> addOrderItems(
            @RequestParam Long orderId,
            @RequestBody List<Long> menuItemIds,
            @RequestParam List<Long> quantities) {

        try {
            List<DeliveryOrderItem> addedItems = deliveryOrderItemService.addOrderItems(orderId, menuItemIds, quantities);
            return ResponseEntity.ok(addedItems);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Endpoint to retrieve all items for a specific order
    @GetMapping("/order-items/{orderId}")
    public ResponseEntity<List<DeliveryOrderItem>> getOrderItemsByOrderId(@PathVariable Long orderId) {
        List<DeliveryOrderItem> orderItems = deliveryOrderItemService.getOrderItemsByOrderId(orderId);
        return ResponseEntity.ok(orderItems);
    }

    // Endpoint to delete an item from an order
    @DeleteMapping("/order-items/{orderItemId}")
    public ResponseEntity<Void> deleteOrderItem(@PathVariable Long orderItemId) {
        try {
            deliveryOrderItemService.deleteOrderItem(orderItemId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
