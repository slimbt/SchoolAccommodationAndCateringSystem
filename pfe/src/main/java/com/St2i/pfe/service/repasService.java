package com.St2i.pfe.service;


import com.St2i.pfe.modele.repasModel;

import java.util.List;

public interface repasService {
    public List<repasModel> getAllRepas();
    public repasModel getRepasById(Long id);
    public repasModel addRepas(repasModel e);
    public repasModel editRepas(repasModel e);
    public void deleteRepasById(Long id);
}