package com.abc.backend.controller;


import com.abc.backend.model.Reservation;
import com.abc.backend.model.RestaurantTable;
import com.abc.backend.model.User;
import com.abc.backend.service.ReservationService;
import com.abc.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:3000")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @Autowired
    private UserService userService;

    // Endpoint to check available tables
    @GetMapping("/reservation/available-tables")
    public ResponseEntity<List<RestaurantTable>> getAvailableTables(
            @RequestParam String date,
            @RequestParam String time,
            @RequestParam String location) {

        try {
            // Convert the date from String to LocalDate
            LocalDate reservationDate = LocalDate.parse(date);
            LocalTime reservationTime = LocalTime.parse(time);

            // Now pass the LocalDate, time, and location to the service
            List<RestaurantTable> availableTables = reservationService.findAvailableTables(reservationDate, reservationTime, location);
            return ResponseEntity.ok(availableTables);

        } catch (DateTimeParseException e) {
            // Handle invalid date format
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Endpoint to create a new reservation
    @PostMapping("/reservation/create")
    public Reservation createReservation(@RequestBody Reservation reservation) {

        return reservationService.createReservation(reservation);
    }

    // Endpoint to get all reservations
    @GetMapping("/reservation/getallreservation")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        try {
            List<Reservation> reservations = reservationService.getAllReservations();
            return ResponseEntity.ok(reservations);
        } catch (Exception e) {
            // Return internal server error for any issues
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Endpoint to update reservation status (APPROVED, DECLINED)
    @PutMapping("/reservation/update-status/{id}")
    public ResponseEntity<?> updateReservationStatus(@PathVariable Long id, @RequestBody Map<String, String> request) {
        String status = request.get("status");
        if (status == null || (!status.equals("PENDING") && !status.equals("APPROVED") && !status.equals("DECLINED"))) {
            return ResponseEntity.badRequest().body("Invalid status");
        }

        // Assuming there's a service method to handle status update
        boolean updated = reservationService.updateStatus(id, status);
        if (updated) {
            return ResponseEntity.ok("Status updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Reservation not found");
        }
    }

    @DeleteMapping("/reservation/delete/{id}")
    public ResponseEntity<String> deleteReservation(@PathVariable("id") Long id) {
        try {
            reservationService.deleteReservation(id);
            return ResponseEntity.ok("Reservation deleted successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error deleting reservation: " + e.getMessage());
        }
    }

    // Endpoint to retrieve all reservations for a specific customer
    @GetMapping("/reservation/customer/{customerId}")
    public ResponseEntity<List<Reservation>> getReservationsByCustomer(@PathVariable Long customerId) {

        User customer = userService.getUserById(customerId);

        List<Reservation> reservations = reservationService.getReservationsByCustomer(customer);
        return ResponseEntity.ok(reservations);
    }

}
