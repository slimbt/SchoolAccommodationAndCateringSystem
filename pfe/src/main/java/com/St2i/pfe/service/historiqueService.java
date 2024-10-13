package com.St2i.pfe.service;



import com.St2i.pfe.modele.historiqueModel;

import java.util.List;

public interface historiqueService {
    public List<historiqueModel> getAllHistorique();
    public historiqueModel getHistoriqueById(Long id);
    public historiqueModel addHistorique (historiqueModel e);
    public historiqueModel editHistorique(historiqueModel e);
    public void deleteHistoriqueById(Long id);
}