package com.abc.backend.controller;

import com.abc.backend.model.Order;
import com.abc.backend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping("/order/create")
    Order newOrder(@RequestBody Order newOrder){
        return orderRepository.save(newOrder);
    }

}
