package com.St2i.pfe.modele;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employees")

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
    @Column(name = "username")
    private String username;
    @Column(name = "email ")
    private String email;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom ")
    private String prenom;
    @Column(name = "cin")
    private int cin;
    @Column(name = "poste")
    private String poste;
    @Column(name = "telephone")
    private int telephone;
    @Column(name = "photo_path")
    private String photoPath;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    private Date createdAt;

    @Column(name = "id_cre")
    private Long id_cre;
    public Long getCreId() {
        return id_cre;
    }

    public void setCreId(Long creId) {
        this.id_cre = creId;
    }
}
