package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class DeliveryOrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemId;

    @ManyToOne
    @JoinColumn(name = "orderId", nullable = false)
    private DeliveryOrder orderId;

    @ManyToOne
    @JoinColumn(name = "itemId", nullable = false)
    private Menu itemId;

    @Column(nullable = false)
    private Long quantity;

    @Column(nullable = false)
    private Double price;   //price = menu.price * quantity

}
