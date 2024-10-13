package com.St2i.pfe.repo;




import com.St2i.pfe.modele.profilModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface profilRepo extends JpaRepository<profilModel, Long> {

}
