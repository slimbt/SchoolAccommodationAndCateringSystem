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
@Table(name = "reclamation")

public class reclamationsModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "nom_expediteur")
    private String nomExpediteur;
    @Column(name = "prenom_expediteur")
    private String prenomExpediteur;

    @Column(name = "telephone")
    private int telephone;
    @Column(name = "CRE")
    private String cre;
    @Column(name = "Libellé")
    private String libelle;
    @Column(name = "objet")
    private String objet;
    @Column(name = "message")
    private String message;
    @Column(name = "Status")
    private String Status;
    @Column(name = "id_parent")
    private Long idParent;

}
