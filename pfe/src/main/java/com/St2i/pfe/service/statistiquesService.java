package com.St2i.pfe.service;

import com.St2i.pfe.modele.repasModel;
import com.St2i.pfe.modele.statistiquesModel;

import java.util.List;

public interface statistiquesService {
    public List<statistiquesModel> getAllStatistiques();
    public statistiquesModel getStatistiquesById(Long id);
    public statistiquesModel addStatistiques(statistiquesModel e);
    public statistiquesModel editStatistiques(statistiquesModel e);
    public void deleteStatistiquesById(Long id);
}