package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.statistiquesModel;

import com.St2i.pfe.service.statistiquesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/statistiques")
public class statistiquesController {
    @Autowired
    public statistiquesService eService;
    @GetMapping("/")
    public List<statistiquesModel> getAllStatistiques() {
        return eService.getAllStatistiques();
    }

    @DeleteMapping("/{x}")
    public void deleteStatistiques(@PathVariable Long x) {
        eService.deleteStatistiquesById(x);
    }
    @GetMapping("/{y}")
    public statistiquesModel getStatistiques (@PathVariable Long y) {
        return eService.getStatistiquesById(y);
    }
    @PostMapping
    public statistiquesModel addStatistiques (@RequestBody statistiquesModel user) {
        return eService.addStatistiques(user);
    }
    @PutMapping
    public statistiquesModel editStatistiques(@RequestBody statistiquesModel user) {
        return eService.addStatistiques(user);}
}


