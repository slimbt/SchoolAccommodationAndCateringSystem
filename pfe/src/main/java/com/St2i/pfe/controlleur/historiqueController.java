package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.historiqueModel;

import com.St2i.pfe.service.historiqueService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/historique")
public class historiqueController  {
    @Autowired
    public historiqueService eService;
    @GetMapping("/")
    public List<historiqueModel> getAllHistorique() {
        return eService.getAllHistorique();
    }

    @DeleteMapping("/{x}")
    public void deleteHistorique(@PathVariable Long x) {
        eService.deleteHistoriqueById(x);
    }
    @GetMapping("/{y}")
    public historiqueModel getHistorique (@PathVariable Long y) {
        return eService.getHistoriqueById(y);
    }
    @PostMapping
    public historiqueModel addHistorique (@RequestBody historiqueModel m) {
        return eService.addHistorique(m);
    }
    @PutMapping
    public historiqueModel editHistorique(@RequestBody historiqueModel m) {
        return eService.addHistorique(m);}
}


