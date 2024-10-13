package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.abonnementModel;

import com.St2i.pfe.service.abonnementService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/abonnement")
public class abonnementController  {
    @Autowired
    public abonnementService eService;
    @GetMapping("/")
    public List<abonnementModel> getAllAbonnement() {
        return eService.getAllAbonnement();
    }

    @DeleteMapping("/{x}")
    public void deleteAbonnement(@PathVariable Long x) {
        eService.deleteAbonnementById(x);
    }
    @GetMapping("/{y}")
    public abonnementModel getAbonnement (@PathVariable Long y) {
        return eService.getAbonnementById(y);
    }
    @PostMapping
    public abonnementModel addAbonnement(@RequestBody abonnementModel ab) {
        return eService.addAbonnement(ab);
    }
    @PutMapping
    public abonnementModel editAbonnement(@RequestBody abonnementModel ab) {
        return eService.addAbonnement(ab);}
}


