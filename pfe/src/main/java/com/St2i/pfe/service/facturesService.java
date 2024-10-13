package com.St2i.pfe.service;


import com.St2i.pfe.modele.facturesModel;

import java.util.List;

public interface facturesService {
    public List<facturesModel> getAllFactures();
    public facturesModel getFacturesById(Long id);
    public facturesModel addFactures (facturesModel e);
    public facturesModel editFactures(facturesModel e);
    public void deleteFacturesById(Long id);
}