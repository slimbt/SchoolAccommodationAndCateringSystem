package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.NotificationRequest;

import com.St2i.pfe.service.NotificationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/notif")
public class NotificationController {
    @Autowired
    public NotificationService eService;

    @GetMapping("/")
    public List<NotificationRequest> getAllNotification() {
        return eService.getAllNotification();
    }

    @DeleteMapping("/{x}")
    public void deleteNotification(@PathVariable Long x) {
        eService.deleteNotificationById(x);
    }

    @GetMapping("/{y}")
    public NotificationRequest getNotification(@PathVariable Long y) {
        return eService.getNotificationById(y);
    }

    @PostMapping
    public NotificationRequest addNotification(@RequestBody NotificationRequest notif) {
        return eService.addNotification(notif);
    }

    @PutMapping("/{id}")
    public NotificationRequest editNotification(@PathVariable Long id, @RequestBody NotificationRequest notif) {
        return eService.addNotification(notif);
    }

    @GetMapping("/byIdParent/{idParent}")
    public List<NotificationRequest> getNotificationByIdParent(@PathVariable Long idParent) {
        return eService.getNotificationByIdParent(idParent);
    }

}
