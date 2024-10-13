package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.reponseModel;

import com.St2i.pfe.repo.reponseRepo;
import com.St2i.pfe.service.reponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class reponseServiceImpl implements reponseService {

    @Autowired
    private reponseRepo reponserepo ;
    @Override
    public List<reponseModel> getAllReponse() {
        // TODO Auto-generated method stub
        return  reponserepo.findAll();

    }

    @Override
    public reponseModel getReponseById(Long id) {
        Optional<reponseModel> e= reponserepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public reponseModel addReponse(reponseModel e) {
        return reponserepo.save(e);
    }

    @Override
    public reponseModel editReponse(reponseModel e) {
        // TODO Auto-generated method stub
        return reponserepo.save(e);
    }

    @Override
    public void deleteReponseById(Long id) {
        reponserepo.deleteById(id);
    }

    @Override
    public List<reponseModel> getReponseByIdParent(Long idParent) {
        return reponserepo.getByIdParent(idParent);
    }
}
