package com.St2i.pfe.repo;




import com.St2i.pfe.modele.personneModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface personneRepo extends JpaRepository<personneModel, Long> {

}
