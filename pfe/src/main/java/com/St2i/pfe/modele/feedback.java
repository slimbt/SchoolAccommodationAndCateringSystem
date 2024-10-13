package com.St2i.pfe.modele;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "feedback")

public class feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    @Column(name = "rating")
    private int rating;
    @Column(name = "feedback")
    private String feedback;
    @Column(name = "status")
    private String status;
    @Column(name = "id_parent")
    private Long idParent;
}
