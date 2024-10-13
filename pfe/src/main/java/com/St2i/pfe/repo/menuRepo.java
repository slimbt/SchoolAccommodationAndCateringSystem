package com.St2i.pfe.repo;





import com.St2i.pfe.modele.menuModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface menuRepo  extends JpaRepository<menuModel, Long> {

}
