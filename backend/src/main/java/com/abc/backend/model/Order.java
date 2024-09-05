package com.abc.backend.model;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
public class Order {

    @Id
    @GeneratedValue
    private Long orderId;

    //private Timestamp timestamp;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User customer;

    @Column(nullable = false)
    private String deliveryAddress;

    @Column(nullable = false)
    private String status;

    //Getters & Setters


    public Long getOrderId() {
        return orderId;
    }

    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
