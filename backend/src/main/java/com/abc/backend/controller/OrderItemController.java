package com.abc.backend.controller;

import com.abc.backend.model.OrderItem;
import com.abc.backend.repository.OrderItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderItemController {

    @Autowired
    private OrderItemRepository orderItemRepository;

    @PostMapping("/orderitem/create")
    OrderItem newOrderItem(@RequestBody OrderItem newOrderItem){
        return orderItemRepository.save(newOrderItem);
    }

}
