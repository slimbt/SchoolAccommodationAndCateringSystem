package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.historiqueModel;

import com.St2i.pfe.repo.historiqueRepo;

import com.St2i.pfe.service.historiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class historiqueServiceImpl implements historiqueService {
    @Autowired
    private historiqueRepo historiquerepo ;
    @Override
    public List<historiqueModel> getAllHistorique() {
        // TODO Auto-generated method stub
        return  historiquerepo.findAll();

    }

    @Override
    public historiqueModel getHistoriqueById(Long id) {
        Optional<historiqueModel> e= historiquerepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public historiqueModel addHistorique(historiqueModel e) {
        return historiquerepo.save(e);
    }

    @Override
    public historiqueModel editHistorique(historiqueModel e) {
        // TODO Auto-generated method stub
        return historiquerepo.save(e);
    }

    @Override
    public void deleteHistoriqueById(Long id) {
        historiquerepo.deleteById(id);
    }

}
