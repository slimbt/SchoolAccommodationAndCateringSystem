package com.St2i.pfe.service;



import com.St2i.pfe.modele.Restauration;

import java.util.List;

public interface restaurationService {
    public List<Restauration> getAllRestauration();
    public Restauration getRestaurationById(Long id);
    public Restauration addRestauration (Restauration e);
    public Restauration editRestauration(Restauration e);
    public void deleteRestaurationById(Long id);

    public List<Restauration> getRestaurationByIdParent(Long idParent);
    public List<Restauration> getRestaurationByIdEleve(Long idEleve);

    public Long countRestauration();

    public List<Object[]> countRestaurationByCre();
}
