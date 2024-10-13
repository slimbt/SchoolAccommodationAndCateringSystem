package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.Restauration;
import com.St2i.pfe.repo.restaurationRepo;
import com.St2i.pfe.service.restaurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class restaurationServiceImpl implements restaurationService {
    @Autowired
    private restaurationRepo restaurationrepo ;
    @Override
    public List<Restauration> getAllRestauration() {
        // TODO Auto-generated method stub
        return  restaurationrepo.findAll();

    }

    @Override
    public Restauration getRestaurationById(Long id) {
        Optional<Restauration> e= restaurationrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public Restauration addRestauration(Restauration e) {
        return restaurationrepo.save(e);
    }

    @Override
    public Restauration editRestauration(Restauration e) {
        // TODO Auto-generated method stub
        return restaurationrepo.save(e);
    }

    @Override
    public void deleteRestaurationById(Long id) {
        restaurationrepo.deleteById(id);
    }

    @Override
    public List<Restauration> getRestaurationByIdParent(Long idParent) {
        return restaurationrepo.getByIdParent(idParent);
    }
    @Override
    public List<Restauration> getRestaurationByIdEleve(Long idEleve) {
        return restaurationrepo.getByIdParent(idEleve);
    }

    public Long countRestauration() {
        return restaurationrepo.count();
    }

    @Override
    public List<Object[]> countRestaurationByCre() {
        return restaurationrepo.countByCre();
    }
}




