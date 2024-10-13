package com.St2i.pfe.service;


import com.St2i.pfe.modele.creModel;

import java.util.List;

public interface creService {
    public List<creModel> getAllCre();
    public creModel getCreById(Long id);
    public creModel addCre (creModel e);
    public creModel editCre(creModel e);
    public void deleteCreById(Long id);

    public Long countCre();
}
