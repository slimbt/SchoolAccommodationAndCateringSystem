package com.St2i.pfe.serviceImpl;


import com.St2i.pfe.modele.User;
import com.St2i.pfe.modele.parentModel;
import com.St2i.pfe.repo.UserRepository;
import com.St2i.pfe.repo.parentRepo;
import com.St2i.pfe.service.parentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class parentServiceImpl implements parentService {
    @Autowired
    private parentRepo parentrepo ;
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<parentModel> getAllParent() {
        // TODO Auto-generated method stub
        return  parentrepo.findAll();

    }

    @Override
    public parentModel getParentById(Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            Long parentId = user.getId_parent(); // Récupère l'ID du parent lié à cet utilisateur
            Optional<parentModel> parentOptional = parentrepo.findById(parentId);
            return parentOptional.orElse(null); // Retourne les coordonnées du parent s'ils existent
        }
        return null;
    }

    @Override
    public parentModel addParent(parentModel e) {
        return parentrepo.save(e);
    }

    @Override
    public parentModel editParent(parentModel e) {
        // TODO Auto-generated method stub
        return parentrepo.save(e);
    }

    @Override
    public void deleteParentById(Long id) {
        parentrepo.deleteById(id);
        Optional<User> userOptional = userRepository.findByParentId(id);

        // Si l'utilisateur existe, le supprimer
        userOptional.ifPresent(user -> userRepository.delete(user));
    }
    public Long countParents() {
        return parentrepo.count();
    }

}



