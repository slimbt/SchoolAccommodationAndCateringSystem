package com.St2i.pfe.modele;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "statistiques")

public class statistiquesModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "nombre_employés")
    private int nbEmployé;
    @Column(name = "nombre_parent")
    private int nbParent;
    @Column(name = "nombre_eleve")
    private int nbeleve;
    @Column(name = "nombre_reclamation")
    private int nbreclamation;
    @Column(name = "nombre_demande_hebergement")
    private int nbdemandehebergement;
    @Column(name = "nombre_demande_restauration")
    private int nbdemanderestauration;
    @Column(name = "profit")
    private float profit;


}
