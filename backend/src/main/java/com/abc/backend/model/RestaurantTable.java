package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
@Entity
public class RestaurantTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;

    @Column(nullable = false)
    private String tableNo;

    @Column(nullable = false)
    private Long seatCount;

    @Column(nullable = false)
    private String location; // e.g., MATARA

    //Getters & Setters

}
