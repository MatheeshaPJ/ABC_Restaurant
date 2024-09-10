package com.abc.backend.repository;


import com.abc.backend.model.Reservation;
import com.abc.backend.model.RestaurantTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {

    // Query to find reservations for a given date, time, and location
    @Query("SELECT r.table FROM Reservation r WHERE r.reservationDate = :date AND r.reservationTime = :time AND r.location = :location")
    List<RestaurantTable> findReservedTables(@Param("date") LocalDate date, @Param("time") LocalTime time, @Param("location") String location);
}

