package com.abc.backend.model;

import jakarta.persistence.*;

@Entity
public class Query {

    @Id
    @GeneratedValue
    private Long QueryId;

    @Column(nullable = false)
    private String queryMessage;

    @Column(nullable = false)
    private Boolean isResolved;

    @ManyToOne
    @JoinColumn(name = "customreId", nullable = false)
    private User fk_query_user;

    //Getters & Setters

    public Long getQueryId() {
        return QueryId;
    }

    public void setQueryId(Long queryId) {
        QueryId = queryId;
    }

    public String getQueryMessage() {
        return queryMessage;
    }

    public void setQueryMessage(String queryMessage) {
        this.queryMessage = queryMessage;
    }

    public Boolean getResolved() {
        return isResolved;
    }

    public void setResolved(Boolean resolved) {
        isResolved = resolved;
    }

    public User getFk_query_user() {
        return fk_query_user;
    }

    public void setFk_query_user(User fk_query_user) {
        this.fk_query_user = fk_query_user;
    }
}
