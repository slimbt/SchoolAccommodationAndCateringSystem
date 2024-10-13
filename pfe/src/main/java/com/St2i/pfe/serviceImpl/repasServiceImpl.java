package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.repasModel;

import com.St2i.pfe.repo.repasRepo;

import com.St2i.pfe.service.repasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class repasServiceImpl implements repasService {
    @Autowired
    private repasRepo repasrepo ;
    @Override
    public List<repasModel> getAllRepas() {
        // TODO Auto-generated method stub
        return  repasrepo.findAll();

    }

    @Override
    public repasModel getRepasById(Long id) {
        Optional<repasModel> e= repasrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public repasModel addRepas(repasModel e) {
        return repasrepo.save(e);
    }

    @Override
    public repasModel editRepas(repasModel e) {
        // TODO Auto-generated method stub
        return repasrepo.save(e);
    }

    @Override
    public void deleteRepasById(Long id) {
        repasrepo.deleteById(id);
    }

}


