package com.abc.backend.controller;

import com.abc.backend.model.Reservation;
import com.abc.backend.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @PostMapping("/reservatio/create")
    Reservation newReservation(@RequestBody Reservation newReservation){
        return reservationRepository.save(newReservation);
    }

}
