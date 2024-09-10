package com.abc.backend.service;


import com.abc.backend.model.Reservation;
import com.abc.backend.model.RestaurantTable;
import com.abc.backend.repository.ReservationRepository;
import com.abc.backend.repository.RestaurantTableRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private RestaurantTableRepository restaurantTableRepository;

    public List<RestaurantTable> findAvailableTables(LocalDate date, LocalTime time, String location) {
        // Find all tables for the given location
        List<RestaurantTable> allTables = restaurantTableRepository.findByLocation(location);

        // Find tables that are already reserved
        List<RestaurantTable> reservedTables = reservationRepository.findReservedTables(date, time, location);

        // Filter out reserved tables
        return allTables.stream()
                .filter(table -> !reservedTables.contains(table))
                .collect(Collectors.toList());
    }

    // Save reservation details
    public Reservation createReservation(Reservation reservation) {
        reservation.setStatus("PENDING"); // Default status
        reservation.setTimestamp(LocalDateTime.now()); // Auto-generated timestamp
        return reservationRepository.save(reservation);
    }

    // Get all reservations for admin/staff to view and change status
    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    // Update the status of a reservation (APPROVED, DECLINED)
    public Reservation updateReservationStatus(Long reservationId, String status) {
        Reservation reservation = reservationRepository.findById(reservationId).orElseThrow();
        reservation.setStatus(status);
        return reservationRepository.save(reservation);
    }

    @Transactional
    public boolean updateStatus(Long reservationId, String status) {
        // Fetch the reservation by ID
        Optional<Reservation> optionalReservation = reservationRepository.findById(reservationId);

        // If the reservation is found, update the status
        if (optionalReservation.isPresent()) {
            Reservation reservation = optionalReservation.get();
            reservation.setStatus(status);
            reservationRepository.save(reservation);  // Save the updated reservation back to the database
            return true;
        } else {
            // Reservation not found
            return false;
        }
    }
    public void deleteReservation(Long id) {
        reservationRepository.deleteById(id);
    }

}
