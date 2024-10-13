package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.Employee;


import com.St2i.pfe.modele.eleveModel;

import com.St2i.pfe.service.eleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/eleve")
public class eleveController {


    @Autowired
    public eleveService eService;
    @GetMapping("/")
    public List<eleveModel> getAllEleve() {return eService.getAllEleve();}

    @DeleteMapping("/{x}")
    public void deleteEleve(@PathVariable Long x) {
        eService.deleteEleveById(x);
    }
    @GetMapping("/{y}")
    public eleveModel getEleve (@PathVariable Long y) {
        return eService.getEleveById(y);
    }
    @PostMapping
    public eleveModel addEleve(@RequestBody eleveModel eleve) {
        return eService.addEleve(eleve);
    }
    @PutMapping("/{id}")
    public eleveModel editEleve(@PathVariable Long id, @RequestBody eleveModel eleve) {
        return eService.addEleve(eleve);
    }

    @GetMapping("/byIdParent/{idParent}")
    public List<eleveModel> getEleveByIdParent (@PathVariable Long idParent) {
        return eService.getEleveByIdParent(idParent);
    }

    @GetMapping("/count")
    public Long countEleve() {
        return eService.countEleve();
    }
}
