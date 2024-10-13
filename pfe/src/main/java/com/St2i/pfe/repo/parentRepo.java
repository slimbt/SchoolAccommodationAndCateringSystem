package com.St2i.pfe.repo;


import com.St2i.pfe.modele.parentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface parentRepo extends JpaRepository<parentModel, Long> {
    Optional<parentModel> findById(Long id);
}
