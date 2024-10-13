package com.St2i.pfe.repo;



import com.St2i.pfe.modele.feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface feedbackRepo extends JpaRepository<feedback, Long> {
    List<feedback> getByIdParent(Long idParent );
}
