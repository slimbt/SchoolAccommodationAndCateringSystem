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
@Table(name = "Hebergements")
public class Hebergement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "nom_expediteur")
    private String nom;
    @Column(name = "prenom_expediteur ")
    private String prenom;
    @Column(name = "datedebut")
    private String datedebut;
    @Column(name = "datefin")
    private String datefin;
    @Column(name = "eleve")
    private String selectedEleve;
    @Column(name = "CRE")
    private String cre;
    @Column(name = "Libellé")
    private String libelle;
    @Column(name = "typeChambre")
    private String typeChambre;
    @Column(name = "message", columnDefinition = "TEXT")
    private String message;
    @Column(name = "Status")
    private String Status;
    @Column(name = "id_parent")
    private Long idParent;
    @Column(name = "id_eleve")
    private Long idEleve;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    @org.hibernate.annotations.CreationTimestamp
    private Date createdAt;
}



