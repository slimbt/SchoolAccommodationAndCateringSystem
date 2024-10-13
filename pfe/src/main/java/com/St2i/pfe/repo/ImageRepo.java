package com.St2i.pfe.repo;

import com.St2i.pfe.modele.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ImageRepo extends JpaRepository<Image, Long> {
    @Query("SELECT i FROM Image i ORDER BY i.createdAt DESC")
    List<Image> findAllOrderByCreatedAtDesc();
}
