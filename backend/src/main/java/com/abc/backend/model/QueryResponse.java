package com.abc.backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

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

    //Getters & Setters


    public Long getResponseId() {
        return responseId;
    }

    public void setResponseId(Long responseId) {
        this.responseId = responseId;
    }

    public Query getFk_response_query() {
        return fk_response_query;
    }

    public void setFk_response_query(Query fk_response_query) {
        this.fk_response_query = fk_response_query;
    }

    public User getFk_response_user() {
        return fk_response_user;
    }

    public void setFk_response_user(User fk_response_user) {
        this.fk_response_user = fk_response_user;
    }

    public String getResponse() {
        return response;
    }

    public void setResponse(String response) {
        this.response = response;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
