package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.eleveModel;
import com.St2i.pfe.modele.feedback;
import com.St2i.pfe.repo.feedbackRepo;
import com.St2i.pfe.service.feedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class feedbackServiceImpl implements feedbackService {
    @Autowired
    private feedbackRepo feedbackrepo ;

    @Override
    public List<feedback> getAllFeedback() {
        // TODO Auto-generated method stub
        return  feedbackrepo.findAll();

    }

    @Override
    public feedback getFeedbackById(Long id) {
        Optional<feedback> e= feedbackrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public feedback addFeedback(feedback e) {
        return feedbackrepo.save(e);
    }

    @Override
    public feedback editFeedback(feedback e) {
        // TODO Auto-generated method stub
        return feedbackrepo.save(e);
    }

    @Override
    public void deleteFeedbackById(Long id) {
        feedbackrepo.deleteById(id);
    }

    @Override
    public List<feedback> getFeedbackByIdParent(Long idParent) {
        return feedbackrepo.getByIdParent(idParent);
    }

    public Long countFeedback() {
        return feedbackrepo.count();
    }
}

