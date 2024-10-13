package com.St2i.pfe.service;


import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.reclamationsModel;

import java.util.List;

public interface reclamationsService {
    public List<reclamationsModel> getAllReclamations();
    public reclamationsModel getReclamationsById(Long id);
    public reclamationsModel addReclamations(reclamationsModel e);
    public reclamationsModel editReclamations(reclamationsModel e);
    public void deleteReclamationsById(Long id);
    public List<reclamationsModel> getReclamationByIdParent(Long idParent);
}