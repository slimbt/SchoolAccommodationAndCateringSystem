package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.profilfonctionModel;

import com.St2i.pfe.repo.profilfonctionRepo;

import com.St2i.pfe.service.profilfonctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class profilfonctionServiceImpl implements profilfonctionService {
    @Autowired
    private profilfonctionRepo profilfonctionrepo ;
    @Override
    public List<profilfonctionModel> getAllProfilfonction() {
        // TODO Auto-generated method stub
        return  profilfonctionrepo.findAll();

    }

    @Override
    public profilfonctionModel getProfilfonctionById(Long id) {
        Optional<profilfonctionModel> e= profilfonctionrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public profilfonctionModel addProfilfonction(profilfonctionModel e) {
        return profilfonctionrepo.save(e);
    }

    @Override
    public profilfonctionModel editProfilfonction(profilfonctionModel e) {
        // TODO Auto-generated method stub
        return profilfonctionrepo.save(e);
    }

    @Override
    public void deleteProfilfonctionById(Long id) {
        profilfonctionrepo.deleteById(id);
    }

}


