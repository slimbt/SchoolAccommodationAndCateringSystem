package com.St2i.pfe.repo;



import com.St2i.pfe.modele.fonctionnalitesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface fonctionnalitesRepo  extends JpaRepository<fonctionnalitesModel, Long> {

}
