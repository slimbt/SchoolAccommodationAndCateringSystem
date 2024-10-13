package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.abonnementModel;
import com.St2i.pfe.repo.abonnementRepo;
import com.St2i.pfe.service.abonnementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class abonnementServiceImpl implements abonnementService {
    @Autowired
    private abonnementRepo abonnementrepo ;
    @Override
    public List<abonnementModel> getAllAbonnement() {
        // TODO Auto-generated method stub
        return  abonnementrepo.findAll();

    }

    @Override
    public abonnementModel getAbonnementById(Long id) {
        Optional<abonnementModel> e= abonnementrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public abonnementModel addAbonnement(abonnementModel e) {
        return abonnementrepo.save(e);
    }

    @Override
    public abonnementModel editAbonnement(abonnementModel e) {
        // TODO Auto-generated method stub
        return abonnementrepo.save(e);
    }

    @Override
    public void deleteAbonnementById(Long id) {
        abonnementrepo.deleteById(id);
    }

}
