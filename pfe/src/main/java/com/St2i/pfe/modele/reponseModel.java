package com.St2i.pfe.modele;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Reponse_rec")
public class reponseModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "message")
    private String message;
    @Column(name = "objet")
    private String objet;
    @Column(name = "id_parent")
    private Long idParent;
}

