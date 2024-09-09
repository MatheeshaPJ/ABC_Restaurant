package com.abc.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reservationId;

    @Column(columnDefinition = "DATE", nullable = false)
    private LocalDateTime reservationDate;

    @Column(columnDefinition = "TIME", nullable = false)
    private LocalDateTime reservationTime;

    @Column(nullable = false)
    private String location;

    @Column(nullable = false)
    private String specialNote;

    @Column(nullable = false)
    private String status;

    @ManyToOne
    @JoinColumn(name = "table_id", nullable = false)
    private RestaurantTable table;

    @ManyToOne
    @JoinColumn( name = "user_id", nullable = false)
    private User customer;

    //Getters & Setters

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }

    public LocalDateTime getReservationDate() {
        return reservationDate;
    }

    public void setReservationDate(LocalDateTime reservationDate) {
        this.reservationDate = reservationDate;
    }

    public LocalDateTime getReservationTime() {
        return reservationTime;
    }

    public void setReservationTime(LocalDateTime reservationTime) {
        this.reservationTime = reservationTime;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSpecialNote() {
        return specialNote;
    }

    public void setSpecialNote(String specialNote) {
        this.specialNote = specialNote;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public RestaurantTable getTable() {
        return table;
    }

    public void setTable(RestaurantTable table) {
        this.table = table;
    }

    public User getCustomer() {
        return customer;
    }

    public void setCustomer(User customer) {
        this.customer = customer;
    }
}
