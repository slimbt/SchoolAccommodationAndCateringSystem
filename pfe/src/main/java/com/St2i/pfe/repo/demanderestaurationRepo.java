package com.St2i.pfe.repo;




import com.St2i.pfe.modele.demanderestaurationModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface demanderestaurationRepo  extends JpaRepository<demanderestaurationModel, Long> {

}

