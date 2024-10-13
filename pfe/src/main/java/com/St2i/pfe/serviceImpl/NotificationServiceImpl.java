package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.NotificationRequest;
import com.St2i.pfe.modele.eleveModel;

import com.St2i.pfe.repo.notificationRepo;
import com.St2i.pfe.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NotificationServiceImpl implements NotificationService {

    @Autowired
    private notificationRepo notificationrepo ;
    @Override
    public List<NotificationRequest> getAllNotification() {
        // TODO Auto-generated method stub
        return  notificationrepo.findAll();

    }

    @Override
    public NotificationRequest getNotificationById(Long id) {
        Optional<NotificationRequest> e= notificationrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public NotificationRequest addNotification(NotificationRequest e) {
        return notificationrepo.save(e);
    }

    @Override
    public NotificationRequest editNotification(NotificationRequest e) {
        // TODO Auto-generated method stub
        return notificationrepo.save(e);
    }

    @Override
    public void deleteNotificationById(Long id) {
        notificationrepo.deleteById(id);
    }


    @Override
    public List<NotificationRequest> getNotificationByIdParent(Long idParent) {
        return notificationrepo.getByIdParent(idParent);
    }


}



