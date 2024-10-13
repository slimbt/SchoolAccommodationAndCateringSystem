package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.facturesModel;
import com.St2i.pfe.modele.fonctionnalitesModel;

import com.St2i.pfe.repo.fonctionnalitesRepo;

import com.St2i.pfe.service.fonctionnalitesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class fonctionnalitesServiceImpl implements fonctionnalitesService {
    @Autowired
    private fonctionnalitesRepo fonctionnalitesrepo ;
    @Override
    public List<fonctionnalitesModel> getAllFonctionnalites() {
        // TODO Auto-generated method stub
        return  fonctionnalitesrepo.findAll();

    }

    @Override
    public fonctionnalitesModel getFonctionnalitesById(Long id) {
        Optional<fonctionnalitesModel> e= fonctionnalitesrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public fonctionnalitesModel addFonctionnalites(fonctionnalitesModel e) {
        return fonctionnalitesrepo.save(e);
    }

    @Override
    public fonctionnalitesModel editFonctionnalites(fonctionnalitesModel e) {
        // TODO Auto-generated method stub
        return fonctionnalitesrepo.save(e);
    }

    @Override
    public void deleteFonctionnalitesById(Long id) {
        fonctionnalitesrepo.deleteById(id);
    }

}



