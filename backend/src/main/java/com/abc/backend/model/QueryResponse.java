package com.abc.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class QueryResponse {

    @Id
    @GeneratedValue
    private Long responseId;

    @OneToOne
    @JoinColumn(name = "queryId", nullable = false)
    private Query fk_response_query;

    @ManyToOne
    @JoinColumn(name = "staffId", nullable = false)
    private User fk_response_user;

    private String response;

    @Column(columnDefinition = "DATETIME", nullable = false)
    private LocalDateTime timestamp;


}
