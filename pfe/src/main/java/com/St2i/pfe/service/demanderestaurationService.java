package com.St2i.pfe.service;


import com.St2i.pfe.modele.demanderestaurationModel;

import java.util.List;

public interface demanderestaurationService {
    public List<demanderestaurationModel> getAllDemanderestauration();
    public demanderestaurationModel getDemanderestaurationById(Long id);
    public demanderestaurationModel addDemanderestauration (demanderestaurationModel e);
    public demanderestaurationModel editDemanderestauration(demanderestaurationModel e);
    public void deleteDemanderestaurationById(Long id);
    public Long countRestauAdmin();
}
