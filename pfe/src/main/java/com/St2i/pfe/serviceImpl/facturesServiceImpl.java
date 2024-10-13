package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.facturesModel;

import com.St2i.pfe.repo.facturesRepo;

import com.St2i.pfe.service.facturesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class facturesServiceImpl implements facturesService {
    @Autowired
    private facturesRepo facturesrepo ;
    @Override
    public List<facturesModel> getAllFactures() {
        // TODO Auto-generated method stub
        return  facturesrepo.findAll();

    }

    @Override
    public facturesModel getFacturesById(Long id) {
        Optional<facturesModel> e= facturesrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public facturesModel addFactures(facturesModel e) {
        return facturesrepo.save(e);
    }

    @Override
    public facturesModel editFactures(facturesModel e) {
        // TODO Auto-generated method stub
        return facturesrepo.save(e);
    }

    @Override
    public void deleteFacturesById(Long id) {
        facturesrepo.deleteById(id);
    }

}



