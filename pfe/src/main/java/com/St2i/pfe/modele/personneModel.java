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
@Table(name = "personne")

public class personneModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "nom_personne")
    private String nom;
    @Column(name = "prenom_personne")
    private String prenom;
    @Column(name = "annee_scolaire")
    private String anneeScolaire;
    @Column(name = "date_naissance")
    private String dateNaissance;
    @Column(name = "sexe")
    private String sexe;
    @Column(name = "adresse")
    private String adresse;
    @Column(name = "email")
    private String email;
    @Column(name = "telephone")
    private int telephone;
    @Column(name = "photo")
    private String photo;



}
