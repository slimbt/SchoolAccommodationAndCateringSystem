package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.Employee;
import com.St2i.pfe.modele.demandehebergementModel;

import com.St2i.pfe.service.demandehebergementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/demandehebergement")
public class demandehebergementController  {
    @Autowired
    public demandehebergementService eService;
    @GetMapping("/")
    public List<demandehebergementModel> getAllDemandehebergement() {
        return eService.getAllDemandehebergement();
    }

    @DeleteMapping("/{x}")
    public void deleteDemandehebergement(@PathVariable Long x) {
        eService.deleteDemandehebergementById(x);
    }
    @GetMapping("/{y}")
    public demandehebergementModel getDemandehebergement (@PathVariable Long y) {
        return eService.getDemandehebergementById(y);
    }
    @PostMapping
    public demandehebergementModel addDemandehebergement(@RequestBody demandehebergementModel d) {
        return eService.addDemandehebergement(d);
    }

@PutMapping("/{id}")
public demandehebergementModel editDemandehebergement(@PathVariable Long id, @RequestBody demandehebergementModel d) {
    return eService.addDemandehebergement(d);}

    @GetMapping("/count")
    public Long countHebergAdmin() {
        return eService.countHebergAdmin();
    }
}



