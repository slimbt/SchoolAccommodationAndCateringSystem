package com.St2i.pfe.service;

import com.St2i.pfe.modele.Employee;
import com.St2i.pfe.modele.eleveModel;

import java.util.List;

public interface eleveService {



    public List<eleveModel> getAllEleve();
    public eleveModel getEleveById(Long id);
    public eleveModel addEleve (eleveModel e);
    public eleveModel editEleve(eleveModel e);
    public void deleteEleveById(Long id);

    public List<eleveModel> getEleveByIdParent(Long idParent);

    public Long countEleve();
}
