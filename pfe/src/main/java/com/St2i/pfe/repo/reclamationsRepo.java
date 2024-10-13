package com.St2i.pfe.repo;





import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.reclamationsModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface reclamationsRepo extends JpaRepository<reclamationsModel, Long> {
    List<reclamationsModel> getByIdParent(Long idParent );
}
