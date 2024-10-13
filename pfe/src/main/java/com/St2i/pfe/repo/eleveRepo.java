package com.St2i.pfe.repo;

import com.St2i.pfe.modele.eleveModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface eleveRepo extends JpaRepository<eleveModel, Long> {

    List<eleveModel>getByIdParent(Long idParent );
}
