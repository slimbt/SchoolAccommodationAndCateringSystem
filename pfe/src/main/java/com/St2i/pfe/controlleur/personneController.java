package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.personneModel;

import com.St2i.pfe.service.personneService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin("*")
@RestController
@RequestMapping("/personne")
public class personneController  {
    @Autowired
    public personneService eService;
    @GetMapping("/")
    public List<personneModel> getAllPersonne() {
        return eService.getAllPersonne();
    }

    @DeleteMapping("/{x}")
    public void deletePersonne(@PathVariable Long x) {
        eService.deletePersonneById(x);
    }
    @GetMapping("/{y}")
    public personneModel getPersonne (@PathVariable Long y) {
        return eService.getPersonneById(y);
    }
    @PostMapping
    public personneModel addPersonne (@RequestBody personneModel pe) {
        return eService.addPersonne(pe);
    }
    @PutMapping
    public personneModel editPersonne(@RequestBody personneModel pe) {
        return eService.addPersonne(pe);}
}


