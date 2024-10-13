package com.St2i.pfe.repo;


import com.St2i.pfe.modele.actualitesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface actualitesRepo extends JpaRepository<actualitesModel, Long> {

}