package com.logu.Shipment_project;

import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "shipments") // Optional: Explicitly define table name
public class Shipment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, unique = true) // Ensures unique tracking numbers
    private long trackingNumber; // Changed from int to long

    @Column(nullable = false)
    private LocalDate expectedDelivery;

    @Column(nullable = false, length = 100)
    private String sender;

    @Column(nullable = false, length = 100)
    private String destination;

    @Column(nullable = false, length = 50) // Ensuring valid statuses
    private String status; // Fixed variable name to camelCase

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public long getTrackingNumber() {
        return trackingNumber;
    }

    public void setTrackingNumber(long trackingNumber) {
        this.trackingNumber = trackingNumber;
    }

    public LocalDate getExpectedDelivery() {
        return expectedDelivery;
    }

    public void setExpectedDelivery(LocalDate expectedDelivery) {
        this.expectedDelivery = expectedDelivery;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status; // Fixed camelCase issue
    }

    @Override
    public String toString() {
        return "Shipment [\n\tid=" + id + 
               ", \n\ttrackingNumber=" + trackingNumber + 
               ", \n\texpectedDelivery=" + expectedDelivery + 
               ", \n\tsender=" + sender + 
               ", \n\tdestination=" + destination + 
               ", \n\tstatus=" + status + "\n]";
    }
}
