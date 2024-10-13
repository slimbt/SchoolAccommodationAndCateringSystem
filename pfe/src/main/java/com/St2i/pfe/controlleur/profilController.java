package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.profilModel;

import com.St2i.pfe.service.profilService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/profil")
public class profilController  {
    @Autowired
    public profilService eService;
    @GetMapping("/")
    public List<profilModel> getAllProfilfonction() {
        return eService.getAllProfil();
    }

    @DeleteMapping("/{x}")
    public void deleteProfil(@PathVariable Long x) {
        eService.deleteProfilById(x);
    }
    @GetMapping("/{y}")
    public profilModel getProfil (@PathVariable Long y) {
        return eService.getProfilById(y);
    }
    @PostMapping
    public profilModel addProfil (@RequestBody profilModel f) {
        return eService.addProfil(f);
    }
    @PutMapping
    public profilModel editProfil(@RequestBody profilModel f) {
        return eService.addProfil(f);}
}


