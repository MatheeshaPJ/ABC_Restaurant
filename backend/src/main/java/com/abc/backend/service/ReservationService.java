package com.abc.backend.service;

import com.abc.backend.model.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    private Reservation reservationRepository;

    public Reservation makeReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public List<Reservation> getReservationsByUserId(Long userId) {
        return reservationRepository.findByUserId(userId);
    }

    public void cancelReservation(Long reservationId) {
        reservationRepository.deleteById(reservationId);
    }
}
