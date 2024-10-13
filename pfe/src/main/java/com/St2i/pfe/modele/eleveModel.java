package com.St2i.pfe.modele;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "eleves")

public class eleveModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "ecole")
    private String ecole;
    @Column(name = "niveau")
    private String niveau;
    @Column(name = "date_naissance")
    private String datenaissance;
    @Column(name = "sexe")
    private String sexe;
    @Column(name = "adresse")
    private String adresse;

    @Column(name = "id_parent")
    private Long idParent;

}

