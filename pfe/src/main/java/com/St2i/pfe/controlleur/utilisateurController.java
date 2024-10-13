package com.St2i.pfe.controlleur;


import com.St2i.pfe.modele.utilisateurModel;

import com.St2i.pfe.service.utilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/utilisateurs")
public class utilisateurController {
    @Autowired
    public utilisateurService eService;
    @GetMapping("/")
    public List<utilisateurModel> getAllUtilsateur() {
        return eService.getAllUtilisateur();
    }

    @DeleteMapping("/{x}")
    public void deleteUtilisateur(@PathVariable Long x) {
        eService.deleteUtilisateurById(x);
    }
    @GetMapping("/{y}")
    public utilisateurModel getUtilisateur (@PathVariable Long y) {
        return eService.getUtilisateurById(y);
    }
    @PostMapping
    public utilisateurModel addUtilisateur (@RequestBody utilisateurModel user) {
        return eService.addUtilisateur(user);
    }
    @PutMapping
    public utilisateurModel editUtilisateur(@RequestBody utilisateurModel user) {
        return eService.addUtilisateur(user);}
}


