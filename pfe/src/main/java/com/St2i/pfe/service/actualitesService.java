package com.St2i.pfe.service;


import com.St2i.pfe.modele.actualitesModel;

import java.util.List;

public interface actualitesService {
    public List<actualitesModel> getAllActualites();
    public actualitesModel getActualitesById(Long id);
    public actualitesModel addActualites (actualitesModel e);
    public actualitesModel editActualites(actualitesModel e);
    public void deleteActualitesById(Long id);
}