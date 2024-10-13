package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.demandehebergementModel;
import com.St2i.pfe.repo.demandehebergementRepo;
import com.St2i.pfe.service.demandehebergementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class demandehebergementServiceImpl implements demandehebergementService {
    @Autowired
    private demandehebergementRepo demandehebergementrepo ;
    @Override
    public List<demandehebergementModel> getAllDemandehebergement() {
        // TODO Auto-generated method stub
        return  demandehebergementrepo.findAll();

    }

    @Override
    public demandehebergementModel getDemandehebergementById(Long id) {
        Optional<demandehebergementModel> e= demandehebergementrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public demandehebergementModel addDemandehebergement(demandehebergementModel e) {
        return demandehebergementrepo.save(e);
    }

    @Override
    public demandehebergementModel editDemandehebergement(demandehebergementModel e) {
        // TODO Auto-generated method stub
        return demandehebergementrepo.save(e);
    }

    @Override
    public void deleteDemandehebergementById(Long id) {
        demandehebergementrepo.deleteById(id);
    }


    public Long countHebergAdmin() {
        return demandehebergementrepo.count();
    }
}
