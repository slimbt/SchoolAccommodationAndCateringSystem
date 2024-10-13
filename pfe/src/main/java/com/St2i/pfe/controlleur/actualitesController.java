package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.actualitesModel;

import com.St2i.pfe.service.actualitesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/actualites")
public class actualitesController  {
    @Autowired
    public actualitesService eService;
    @GetMapping("/")
    public List<actualitesModel> getAllActualites() {
        return eService.getAllActualites();
    }

    @DeleteMapping("/{x}")
    public void deleteActualites(@PathVariable Long x) {
        eService.deleteActualitesById(x);
    }
    @GetMapping("/{y}")
    public actualitesModel getActualites (@PathVariable Long y) {
        return eService.getActualitesById(y);
    }
    @PostMapping
    public actualitesModel addActualites(@RequestBody actualitesModel a) {
        return eService.addActualites(a);
    }
    @PutMapping
    public actualitesModel editActualites(@RequestBody actualitesModel a) {
        return eService.addActualites(a);}
}


