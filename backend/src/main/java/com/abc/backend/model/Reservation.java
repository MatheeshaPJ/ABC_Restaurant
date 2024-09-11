package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;


@Setter
@Getter
@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @Column(columnDefinition = "DATE", nullable = false)
    private LocalDate reservationDate;                  // stored as YYYY-MM-DD


    @Column(columnDefinition = "TIME", nullable = false)
    private LocalTime reservationTime;                  // stored as HH:mm:ss


    @Column(nullable = false)
    private String location;

    @Column(nullable = true)
    private String specialNote;

    @Column(nullable = false)
    private String status = "PENDING"; // PENDING, APPROVED, DECLINED

    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private RestaurantTable table;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User customer;

    @Column(nullable = false)
    private String reserveUnder;

    @Column(nullable = false)
    private String contact;

    @Column(columnDefinition = "TIMESTAMP", nullable = false, updatable = false)
    private LocalDateTime timestamp = LocalDateTime.now(); // Auto-generated timestamp

}
