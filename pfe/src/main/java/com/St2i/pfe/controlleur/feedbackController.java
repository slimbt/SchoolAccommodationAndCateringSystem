package com.St2i.pfe.controlleur;


import com.St2i.pfe.modele.eleveModel;
import com.St2i.pfe.modele.feedback;
import com.St2i.pfe.repo.feedbackRepo;
import com.St2i.pfe.service.feedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


    @CrossOrigin(origins = "http://localhost:4200")
    @RestController
    @RequestMapping("/feedback")
    public class feedbackController {
        @Autowired
        private feedbackRepo feedbackrepo;
        @Autowired
        public feedbackService eService;
        @GetMapping("/")
        public List<feedback> getAllFeedback() {return eService.getAllFeedback();}

        @DeleteMapping("/{x}")
        public void deleteFeedback(@PathVariable Long x) {
            eService.deleteFeedbackById(x);
        }
        @GetMapping("/{y}")
        public feedback getFeedback (@PathVariable Long y) {
            return eService.getFeedbackById(y);
        }
        @PostMapping
        public feedback addFeedback (@RequestBody feedback f) {
            return eService.addFeedback(f);
        }
        @PutMapping("/{id}")
        public feedback editFeedback(@PathVariable Long id, @RequestBody feedback f) {
            return eService.addFeedback(f);
        }

        @GetMapping("parent/{idParent}")
        public List<feedback> getFeedbackByIdParent (@PathVariable Long idParent) {
            return eService.getFeedbackByIdParent(idParent);
        }
        @GetMapping("/count")
        public Long countCre() {
            return eService.countFeedback();
        }
    }

