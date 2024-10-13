package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.repasModel;
import com.St2i.pfe.modele.statistiquesModel;

import com.St2i.pfe.repo.statistiquesRepo;

import com.St2i.pfe.service.statistiquesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class statistiquesServiceImpl implements statistiquesService {
    @Autowired
    private statistiquesRepo statistiquesrepo ;
    @Override
    public List<statistiquesModel> getAllStatistiques() {
        // TODO Auto-generated method stub
        return  statistiquesrepo.findAll();

    }

    @Override
    public statistiquesModel getStatistiquesById(Long id) {
        Optional<statistiquesModel> e= statistiquesrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public statistiquesModel addStatistiques(statistiquesModel e) {
        return statistiquesrepo.save(e);
    }

    @Override
    public statistiquesModel editStatistiques(statistiquesModel e) {
        // TODO Auto-generated method stub
        return statistiquesrepo.save(e);
    }

    @Override
    public void deleteStatistiquesById(Long id) {
        statistiquesrepo.deleteById(id);
    }

}


