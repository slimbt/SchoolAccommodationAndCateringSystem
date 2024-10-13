package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.eleveModel;

import com.St2i.pfe.repo.eleveRepo;

import com.St2i.pfe.service.eleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class eleveServiceImpl implements eleveService {

    @Autowired
    private eleveRepo eleverepo ;
    @Override
    public List<eleveModel> getAllEleve() {
        // TODO Auto-generated method stub
        return  eleverepo.findAll();

    }

    @Override
    public eleveModel getEleveById(Long id) {
        Optional<eleveModel> e= eleverepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public eleveModel addEleve(eleveModel e) {
        return eleverepo.save(e);
    }

    @Override
    public eleveModel editEleve(eleveModel e) {
        // TODO Auto-generated method stub
        return eleverepo.save(e);
    }

    @Override
    public void deleteEleveById(Long id) {
        eleverepo.deleteById(id);
    }


    @Override
    public List<eleveModel> getEleveByIdParent(Long idParent) {
      return eleverepo.getByIdParent(idParent);
    }

    public Long countEleve() {
        return eleverepo.count();
    }
}


