package com.St2i.pfe.service;


import com.St2i.pfe.modele.menuModel;

import java.util.List;

public interface menuService {
    public List<menuModel> getAllMenu();
    public menuModel getMenuById(Long id);
    public menuModel addMenu (menuModel e);
    public menuModel editMenu(menuModel e);
    public void deleteMenuById(Long id);
}