package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.fonctionnalitesModel;
import com.St2i.pfe.modele.historiqueModel;
import com.St2i.pfe.service.fonctionnalitesService;
import com.St2i.pfe.service.historiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/fonctionnalites")
public class fonctionnalitesController  {
    @Autowired
    public fonctionnalitesService eService;
    @GetMapping("/")
    public List<fonctionnalitesModel> getAllFonctionnalites() {
        return eService.getAllFonctionnalites();
    }

    @DeleteMapping("/{x}")
    public void deleteFonctionnalites(@PathVariable Long x) {
        eService.deleteFonctionnalitesById(x);
    }
    @GetMapping("/{y}")
    public fonctionnalitesModel getFonctionnalites (@PathVariable Long y) {
        return eService.getFonctionnalitesById(y);
    }
    @PostMapping
    public fonctionnalitesModel addFonctionnalites (@RequestBody fonctionnalitesModel h) {
        return eService.addFonctionnalites(h);
    }
    @PutMapping
    public fonctionnalitesModel editFonctionnalites(@RequestBody fonctionnalitesModel h) {
        return eService.addFonctionnalites(h);}
}
