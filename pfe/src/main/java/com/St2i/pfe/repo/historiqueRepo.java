package com.St2i.pfe.repo;




import com.St2i.pfe.modele.historiqueModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface historiqueRepo  extends JpaRepository<historiqueModel, Long> {

}
