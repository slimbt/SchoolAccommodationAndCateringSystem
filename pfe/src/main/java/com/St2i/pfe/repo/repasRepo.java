package com.St2i.pfe.repo;






import com.St2i.pfe.modele.repasModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repasRepo extends JpaRepository<repasModel, Long> {

}
