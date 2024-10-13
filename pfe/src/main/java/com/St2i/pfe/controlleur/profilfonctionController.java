package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.profilfonctionModel;

import com.St2i.pfe.service.profilfonctionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin("*")
@RestController
@RequestMapping("/profilfonction")
public class profilfonctionController  {
    @Autowired
    public profilfonctionService eService;
    @GetMapping("/")
    public List<profilfonctionModel> getAllProfilfonction() {
        return eService.getAllProfilfonction();
    }

    @DeleteMapping("/{x}")
    public void deleteProfilfonction(@PathVariable Long x) {
        eService.deleteProfilfonctionById(x);
    }
    @GetMapping("/{y}")
    public profilfonctionModel getProfilfonction (@PathVariable Long y) {
        return eService.getProfilfonctionById(y);
    }
    @PostMapping
    public profilfonctionModel addProfilfonction (@RequestBody profilfonctionModel p) {
        return eService.addProfilfonction(p);
    }
    @PutMapping
    public profilfonctionModel editProfilfonction(@RequestBody profilfonctionModel p) {
        return eService.addProfilfonction(p);}
}


