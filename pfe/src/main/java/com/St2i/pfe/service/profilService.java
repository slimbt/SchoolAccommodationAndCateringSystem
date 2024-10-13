package com.St2i.pfe.service;

import com.St2i.pfe.modele.profilModel;


import java.util.List;

public interface profilService {
    public List<profilModel> getAllProfil();
    public profilModel getProfilById(Long id);
    public profilModel addProfil(profilModel e);
    public profilModel editProfil(profilModel e);
    public void deleteProfilById(Long id);
}