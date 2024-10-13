package com.St2i.pfe.serviceImpl;

import com.St2i.pfe.modele.menuModel;

import com.St2i.pfe.repo.menuRepo;

import com.St2i.pfe.service.menuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class menuServiceImpl implements menuService {
    @Autowired
    private menuRepo menurepo ;
    @Override
    public List<menuModel> getAllMenu() {
        // TODO Auto-generated method stub
        return  menurepo.findAll();

    }

    @Override
    public menuModel getMenuById(Long id) {
        Optional<menuModel> e= menurepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public menuModel addMenu(menuModel e) {
        return menurepo.save(e);
    }

    @Override
    public menuModel editMenu(menuModel e) {
        // TODO Auto-generated method stub
        return menurepo.save(e);
    }

    @Override
    public void deleteMenuById(Long id) {
        menurepo.deleteById(id);
    }

}


