package com.St2i.pfe.modele;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "parents")
public class parentModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "username")
    private String username;
    @Column(name = "email ")
    private String email;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "cin")
    private long cin;
    @Column(name = "profession")
    private String profession;
    @Column(name = "adresse")
    private String adresse;
    @Column(name = "telephone")
    private long telephone;
    @Column(name = "photo_path")
    private String photoPath;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    private Date createdAt;
}

