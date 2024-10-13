package com.St2i.pfe.service;



import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.eleveModel;

import java.util.List;

public interface hebergementService {
    public List<Hebergement> getAllHebergement();
    public Hebergement getHebergementById(Long id);
    public Hebergement addHebergement (Hebergement e);
    public Hebergement editHebergement(Hebergement e);
    public void deleteHebergementById(Long id);

    public List<Hebergement> getHebergementByIdParent(Long idParent);
    public List<Hebergement> getHebergementByIdEleve(Long idEleve);


    public List<Hebergement> getHebergementsByCre(String cre) ;

    public Long countHebergement();
    public List<Object[]> countHebergementByCre();
}
