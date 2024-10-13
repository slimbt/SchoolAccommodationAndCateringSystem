package com.St2i.pfe.service;



import com.St2i.pfe.modele.parentModel;

import java.util.List;

public interface parentService {

    public List<parentModel> getAllParent();
    public parentModel getParentById(Long id);
    public parentModel addParent (parentModel e);
    public parentModel editParent(parentModel e);
    public void deleteParentById(Long id);
    public Long countParents();
}
