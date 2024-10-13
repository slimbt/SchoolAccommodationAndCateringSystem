package com.St2i.pfe.repo;



import com.St2i.pfe.modele.reponseModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface reponseRepo extends JpaRepository<reponseModel, Long> {
    List<reponseModel> getByIdParent(Long idParent );

}
