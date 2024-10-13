package com.St2i.pfe.repo;



import com.St2i.pfe.modele.profilfonctionModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface profilfonctionRepo extends JpaRepository<profilfonctionModel, Long> {

}
