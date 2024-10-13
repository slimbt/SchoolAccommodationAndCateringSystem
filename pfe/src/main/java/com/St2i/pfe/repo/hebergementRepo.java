package com.St2i.pfe.repo;


import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.eleveModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface hebergementRepo extends JpaRepository<Hebergement, Long> {

    List<Hebergement> getByIdParent(Long idParent );
    List<Hebergement> getByIdEleve(Long idEleve );
    List<Hebergement> findByCre(String cre);

    @Query("SELECT h.cre, COUNT(h) FROM Hebergement h GROUP BY h.cre")
    List<Object[]> countByCre();
}


