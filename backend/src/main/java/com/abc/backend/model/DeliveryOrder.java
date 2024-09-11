package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
public class DeliveryOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime orderTimestamp;

    @ManyToOne
    @JoinColumn(name = "customerId", nullable = false)
    private User customerId;      //Logged-in user

    @Column(nullable = false)
    private String deliveryAddress;

    @Column(nullable = false)
    private String status;      //(PENDING, CONFIRMED, READY-FOR-DELIVERY, OUT-FOR-DELIVERY, COMPLETED, CANCELLED, FAILED)

    @Column(nullable = false)
    private String contact;

    @Column(nullable = false)
    private Double finalPrice;      //Summation of prices all items

}
