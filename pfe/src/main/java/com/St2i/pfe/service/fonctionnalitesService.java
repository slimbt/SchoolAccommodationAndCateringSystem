package com.St2i.pfe.service;



import com.St2i.pfe.modele.fonctionnalitesModel;

import java.util.List;

public interface fonctionnalitesService {
    public List<fonctionnalitesModel> getAllFonctionnalites();
    public fonctionnalitesModel getFonctionnalitesById(Long id);
    public fonctionnalitesModel addFonctionnalites (fonctionnalitesModel e);
    public fonctionnalitesModel editFonctionnalites(fonctionnalitesModel e);
    public void deleteFonctionnalitesById(Long id);
}