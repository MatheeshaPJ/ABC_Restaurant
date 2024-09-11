package com.abc.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@Entity
public class QueryResponse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
