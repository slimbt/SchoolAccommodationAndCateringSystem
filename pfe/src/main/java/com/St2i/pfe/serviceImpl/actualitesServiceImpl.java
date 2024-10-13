package com.St2i.pfe.serviceImpl;




import com.St2i.pfe.modele.actualitesModel;
import com.St2i.pfe.repo.actualitesRepo;
import com.St2i.pfe.service.actualitesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class actualitesServiceImpl implements actualitesService {
    @Autowired
    private actualitesRepo actualitesrepo ;
    @Override
    public List<actualitesModel> getAllActualites() {
        // TODO Auto-generated method stub
        return  actualitesrepo.findAll();

    }

    @Override
    public actualitesModel getActualitesById(Long id) {
        Optional<actualitesModel> e= actualitesrepo.findById(id);
        return e.isPresent() ? e.get() : null;
    }

    @Override
    public actualitesModel addActualites(actualitesModel e) {
        return actualitesrepo.save(e);
    }

    @Override
    public actualitesModel editActualites(actualitesModel e) {
        // TODO Auto-generated method stub
        return actualitesrepo.save(e);
    }

    @Override
    public void deleteActualitesById(Long id) {
        actualitesrepo.deleteById(id);
    }

}
