package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.personneModel;

import com.St2i.pfe.repo.personneRepo;
import com.St2i.pfe.service.personneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class personneServiceImpl implements personneService {
    @Autowired
    private personneRepo personnerepo ;
    @Override
    public List<personneModel> getAllPersonne() {
        // TODO Auto-generated method stub
        return  personnerepo.findAll();

    }

    @Override
    public personneModel getPersonneById(Long id) {
        Optional<personneModel> e= personnerepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public personneModel addPersonne(personneModel e) {
        return personnerepo.save(e);
    }

    @Override
    public personneModel editPersonne(personneModel e) {
        // TODO Auto-generated method stub
        return personnerepo.save(e);
    }

    @Override
    public void deletePersonneById(Long id) {
        personnerepo.deleteById(id);
    }

}


