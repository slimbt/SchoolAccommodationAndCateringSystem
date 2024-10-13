package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.profilModel;

import com.St2i.pfe.repo.profilRepo;

import com.St2i.pfe.service.profilService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class profilServiceImpl implements profilService {
    @Autowired
    private profilRepo profilrepo ;
    @Override
    public List<profilModel> getAllProfil() {
        // TODO Auto-generated method stub
        return  profilrepo.findAll();

    }

    @Override
    public profilModel getProfilById(Long id) {
        Optional<profilModel> e= profilrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public profilModel addProfil(profilModel e) {
        return profilrepo.save(e);
    }

    @Override
    public profilModel editProfil(profilModel e) {
        // TODO Auto-generated method stub
        return profilrepo.save(e);
    }

    @Override
    public void deleteProfilById(Long id) {
        profilrepo.deleteById(id);
    }

}


