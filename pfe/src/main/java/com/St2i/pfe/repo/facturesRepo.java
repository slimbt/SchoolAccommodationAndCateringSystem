package com.St2i.pfe.repo;


import com.St2i.pfe.modele.facturesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface facturesRepo  extends JpaRepository<facturesModel, Long> {

}

