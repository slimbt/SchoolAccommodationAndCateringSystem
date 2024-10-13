package com.St2i.pfe.service;


import com.St2i.pfe.modele.utilisateurModel;

import java.util.List;

public interface utilisateurService {
    public List<utilisateurModel> getAllUtilisateur();
    public utilisateurModel getUtilisateurById(Long id);
    public utilisateurModel addUtilisateur(utilisateurModel e);
    public utilisateurModel editUtilisateur(utilisateurModel e);
    public void deleteUtilisateurById(Long id);
}