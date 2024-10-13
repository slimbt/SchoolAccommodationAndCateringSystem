package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.profilModel;
import com.St2i.pfe.modele.reclamationsModel;

import com.St2i.pfe.repo.reclamationsRepo;

import com.St2i.pfe.service.reclamationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class reclamationsServiceImpl implements reclamationsService {
    @Autowired
    private reclamationsRepo reclamationsrepo ;
    @Override
    public List<reclamationsModel> getAllReclamations() {
        // TODO Auto-generated method stub
        return  reclamationsrepo.findAll();

    }

    @Override
    public reclamationsModel getReclamationsById(Long id) {
        Optional<reclamationsModel> e= reclamationsrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public reclamationsModel addReclamations(reclamationsModel e) {
        return reclamationsrepo.save(e);
    }

    @Override
    public reclamationsModel editReclamations(reclamationsModel e) {
        // TODO Auto-generated method stub
        return reclamationsrepo.save(e);
    }

    @Override
    public void deleteReclamationsById(Long id) {
        reclamationsrepo.deleteById(id);
    }

    @Override
    public List<reclamationsModel> getReclamationByIdParent(Long idParent) {
        return reclamationsrepo.getByIdParent(idParent);
    }
}


