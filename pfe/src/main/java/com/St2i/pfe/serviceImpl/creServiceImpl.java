package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.creModel;
import com.St2i.pfe.repo.creRepo;

import com.St2i.pfe.service.creService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class creServiceImpl implements creService {
    @Autowired
    private creRepo crerepo ;
    @Override
    public List<creModel> getAllCre() {
        // TODO Auto-generated method stub
        return  crerepo.findAll();

    }

    @Override
    public creModel getCreById(Long id) {
        Optional<creModel> e= crerepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public creModel addCre(creModel e) {
        return crerepo.save(e);
    }

    @Override
    public creModel editCre(creModel e) {
        // TODO Auto-generated method stub
        return crerepo.save(e);
    }

    @Override
    public void deleteCreById(Long id) {
        crerepo.deleteById(id);
    }

    public Long countCre() {
        return crerepo.count();
    }

}


