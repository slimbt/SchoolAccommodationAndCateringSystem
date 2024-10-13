package com.St2i.pfe.service;

import com.St2i.pfe.modele.abonnementModel;

import java.util.List;

public interface abonnementService {
    public List<abonnementModel> getAllAbonnement();
    public abonnementModel getAbonnementById(Long id);
    public abonnementModel addAbonnement (abonnementModel e);
    public abonnementModel editAbonnement(abonnementModel e);
    public void deleteAbonnementById(Long id);

}