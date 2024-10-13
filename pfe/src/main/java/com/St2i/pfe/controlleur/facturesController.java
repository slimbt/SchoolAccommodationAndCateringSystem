package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.facturesModel;
import com.St2i.pfe.service.facturesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@CrossOrigin("*")
@RestController
@RequestMapping("/factures")
public class facturesController {
    @Autowired
    public facturesService eService;
    @GetMapping("/")
    public List<facturesModel> getAllFactures() {
        return eService.getAllFactures();
    }

    @DeleteMapping("/{x}")
    public void deleteFactures(@PathVariable Long x) {
        eService.deleteFacturesById(x);
    }
    @GetMapping("/{y}")
    public facturesModel getFactures (@PathVariable Long y) {
        return eService.getFacturesById(y);
    }
    @PostMapping
    public facturesModel addFactures (@RequestBody facturesModel user) {
        return eService.addFactures(user);
    }
    @PutMapping
    public facturesModel editFactures(@RequestBody facturesModel user) {
        return eService.addFactures(user);}
}


