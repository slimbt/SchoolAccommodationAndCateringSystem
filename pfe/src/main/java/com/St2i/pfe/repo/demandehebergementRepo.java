package com.St2i.pfe.repo;



import com.St2i.pfe.modele.demandehebergementModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface demandehebergementRepo  extends JpaRepository<demandehebergementModel, Long> {


}
