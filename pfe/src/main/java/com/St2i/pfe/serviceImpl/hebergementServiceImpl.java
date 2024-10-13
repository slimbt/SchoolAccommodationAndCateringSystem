package com.St2i.pfe.serviceImpl;



import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.eleveModel;
import com.St2i.pfe.repo.hebergementRepo;
import com.St2i.pfe.service.hebergementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class hebergementServiceImpl implements hebergementService {
    @Autowired
    private hebergementRepo hebergementrepo ;
    @Override
    public List<Hebergement> getAllHebergement() {
        // TODO Auto-generated method stub
        return  hebergementrepo.findAll();

    }

    @Override
    public Hebergement getHebergementById(Long id) {
        Optional<Hebergement> e= hebergementrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public Hebergement addHebergement(Hebergement e) {
        return hebergementrepo.save(e);
    }

    @Override
    public Hebergement editHebergement(Hebergement e) {
        // TODO Auto-generated method stub
        return hebergementrepo.save(e);
    }

    @Override
    public void deleteHebergementById(Long id) {
        hebergementrepo.deleteById(id);
    }

    @Override
    public List<Hebergement> getHebergementByIdParent(Long idParent) {
        return hebergementrepo.getByIdParent(idParent);
    }
    @Override
    public List<Hebergement> getHebergementByIdEleve(Long idEleve) {
        return hebergementrepo.getByIdParent(idEleve);
    }


    public List<Hebergement> getHebergementsByCre(String cre) {
        return hebergementrepo.findByCre(cre);
    }

    public Long countHebergement() {
        return hebergementrepo.count();
    }

    @Override
    public List<Object[]> countHebergementByCre() {
        return hebergementrepo.countByCre();
    }

}




