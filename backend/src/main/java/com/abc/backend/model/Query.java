package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
public class Query {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long QueryId;

    @Column(nullable = false)
    private String queryMessage;

    @Column(nullable = false)
    private Boolean isResolved;

    @ManyToOne
    @JoinColumn(name = "customerId", nullable = false)
    private User user;


}
