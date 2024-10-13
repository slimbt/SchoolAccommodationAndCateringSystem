package com.St2i.pfe.service;


import com.St2i.pfe.modele.reponseModel;

import java.util.List;

public interface reponseService {
    public List<reponseModel> getAllReponse();
    public reponseModel getReponseById(Long id);
    public reponseModel addReponse(reponseModel e);
    public reponseModel editReponse(reponseModel e);
    public void deleteReponseById(Long id);
    public List<reponseModel> getReponseByIdParent(Long idParent);
}
