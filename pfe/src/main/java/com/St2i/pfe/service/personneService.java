package com.St2i.pfe.service;



import com.St2i.pfe.modele.personneModel;

import java.util.List;

public interface personneService {
    public List<personneModel> getAllPersonne();
    public personneModel getPersonneById(Long id);
    public personneModel addPersonne(personneModel e);
    public personneModel editPersonne(personneModel e);
    public void deletePersonneById(Long id);
}