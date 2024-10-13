package com.St2i.pfe.service;

import com.St2i.pfe.modele.demandehebergementModel;

import java.util.List;

public interface demandehebergementService {
    public List<demandehebergementModel> getAllDemandehebergement();
    public demandehebergementModel getDemandehebergementById(Long id);
    public demandehebergementModel addDemandehebergement (demandehebergementModel e);
    public demandehebergementModel editDemandehebergement(demandehebergementModel e);
    public void deleteDemandehebergementById(Long id);
    public Long countHebergAdmin();
}