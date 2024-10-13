package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.demanderestaurationModel;

import com.St2i.pfe.repo.demanderestaurationRepo;

import com.St2i.pfe.service.demanderestaurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class demanderestaurationServiceImpl implements demanderestaurationService {
    @Autowired
    private demanderestaurationRepo demanderestaurationrepo ;
    @Override
    public List<demanderestaurationModel> getAllDemanderestauration() {
        // TODO Auto-generated method stub
        return  demanderestaurationrepo.findAll();

    }

    @Override
    public demanderestaurationModel getDemanderestaurationById(Long id) {
        Optional<demanderestaurationModel> e= demanderestaurationrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public demanderestaurationModel addDemanderestauration(demanderestaurationModel e) {
        return demanderestaurationrepo.save(e);
    }

    @Override
    public demanderestaurationModel editDemanderestauration(demanderestaurationModel e) {
        // TODO Auto-generated method stub
        return demanderestaurationrepo.save(e);
    }

    @Override
    public void deleteDemanderestaurationById(Long id) {
        demanderestaurationrepo.deleteById(id);
    }


    public Long countRestauAdmin() {
        return demanderestaurationrepo.count();
    }
}



