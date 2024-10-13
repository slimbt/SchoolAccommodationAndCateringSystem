package com.St2i.pfe.repo;

import com.St2i.pfe.modele.NotificationRequest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface notificationRepo extends JpaRepository<NotificationRequest, Long> {

    List<NotificationRequest> getByIdParent(Long idParent );


}