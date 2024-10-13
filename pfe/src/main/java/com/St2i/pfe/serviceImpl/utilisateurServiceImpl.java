package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.utilisateurModel;
import com.St2i.pfe.repo.utilisateurRepo;

import com.St2i.pfe.service.utilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class utilisateurServiceImpl implements utilisateurService {
    @Autowired
    private utilisateurRepo utilisateurrepo ;
    @Override
    public List<utilisateurModel> getAllUtilisateur() {
        // TODO Auto-generated method stub
        return  utilisateurrepo.findAll();

    }

    @Override
    public utilisateurModel getUtilisateurById(Long id) {
        Optional<utilisateurModel> e= utilisateurrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public utilisateurModel addUtilisateur(utilisateurModel e) {
        return utilisateurrepo.save(e);
    }

    @Override
    public utilisateurModel editUtilisateur(utilisateurModel e) {
        // TODO Auto-generated method stub
        return utilisateurrepo.save(e);
    }

    @Override
    public void deleteUtilisateurById(Long id) {
        utilisateurrepo.deleteById(id);
    }

}


