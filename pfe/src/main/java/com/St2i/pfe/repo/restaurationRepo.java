package com.St2i.pfe.repo;



import com.St2i.pfe.modele.Restauration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface restaurationRepo  extends JpaRepository<Restauration, Long> {

    List<Restauration> getByIdParent(Long idParent );
    List<Restauration> getByIdEleve(Long idEleve );

    @Query("SELECT r.cre, COUNT(r) FROM Restauration r GROUP BY r.cre")
    List<Object[]> countByCre();
}

