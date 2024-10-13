package com.St2i.pfe.repo;







import com.St2i.pfe.modele.statistiquesModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface statistiquesRepo extends JpaRepository<statistiquesModel, Long> {

}
