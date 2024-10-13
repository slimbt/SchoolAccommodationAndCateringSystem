package com.St2i.pfe.service;



import com.St2i.pfe.modele.feedback;

import java.util.List;

public interface feedbackService {
    public List<feedback> getAllFeedback();
    public feedback getFeedbackById(Long id);
    public feedback addFeedback (feedback e);
    public feedback editFeedback(feedback e);
    public void deleteFeedbackById(Long id);

    public List<feedback> getFeedbackByIdParent(Long idParent);
    public Long countFeedback();
}

