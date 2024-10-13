package com.St2i.pfe.service;

import com.St2i.pfe.modele.NotificationRequest;


import java.util.List;

public interface NotificationService {
    public List<NotificationRequest> getAllNotification();
    public NotificationRequest getNotificationById(Long id);
    public NotificationRequest addNotification (NotificationRequest e);
    public NotificationRequest editNotification(NotificationRequest e);
    public void deleteNotificationById(Long id);

    public List<NotificationRequest> getNotificationByIdParent(Long idParent);
}
