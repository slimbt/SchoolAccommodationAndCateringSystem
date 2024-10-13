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
@Table(name = "abonnement")

public class abonnementModel {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        private Long id;

        @Column(name = "nom abonné")
        private String nomAbonne;
        @Column(name = "prenom abonné")
        private String prenomAbonne;
        @Column(name = "date debut")
        private String dateDebut;
        @Column(name = "nom fin")
        private String dateFin;


    }
