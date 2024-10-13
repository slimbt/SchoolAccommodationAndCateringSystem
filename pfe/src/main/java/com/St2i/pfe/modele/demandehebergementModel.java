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
@Table(name = "demande_hebergement")

public class demandehebergementModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "code")
    private int code;
    @Column(name = "libelle ")
    private String libelle;
    @Column(name = "adresse ")
    private String adresse;
    @Column(name = "CRE")
    private String cre;
    @Column(name = "capacite")
    private long capacite;
    @Column(name = "cout")
    private float cout;
    @Column(name = "responsable")
    private String responsable;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    private Date createdAt;


    @Column(name = "id_employee")
    private Long id_employee;


}
