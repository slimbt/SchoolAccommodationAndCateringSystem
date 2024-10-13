package com.St2i.pfe.repo;





import com.St2i.pfe.modele.utilisateurModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface utilisateurRepo extends JpaRepository<utilisateurModel, Long> {

}
