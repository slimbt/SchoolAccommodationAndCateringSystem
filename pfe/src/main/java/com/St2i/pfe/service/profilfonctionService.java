package com.St2i.pfe.service;


import com.St2i.pfe.modele.profilfonctionModel;

import java.util.List;

public interface profilfonctionService {
    public List<profilfonctionModel> getAllProfilfonction();
    public profilfonctionModel getProfilfonctionById(Long id);
    public profilfonctionModel addProfilfonction(profilfonctionModel e);
    public profilfonctionModel editProfilfonction(profilfonctionModel e);
    public void deleteProfilfonctionById(Long id);
}