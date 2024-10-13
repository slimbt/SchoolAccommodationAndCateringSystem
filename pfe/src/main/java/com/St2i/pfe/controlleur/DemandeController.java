package com.St2i.pfe.controlleur;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demandes")
@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class DemandeController {




        @MessageMapping("/sendMessage")
        @SendTo("/topic/messages")
        public String sendMessage(String message) {
            return message;
        }
    }