package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.demandehebergementModel;
import com.St2i.pfe.modele.demanderestaurationModel;

import com.St2i.pfe.service.demanderestaurationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/demanderestauration")
public class demanderestaurationController {
    @Autowired
    public demanderestaurationService eService;
    @GetMapping("/")
    public List<demanderestaurationModel> getAllDemanderestauration() {
        return eService.getAllDemanderestauration();
    }

    @DeleteMapping("/{x}")
    public void deleteDemanderestauration(@PathVariable Long x) {
        eService.deleteDemanderestaurationById(x);
    }
    @GetMapping("/{y}")
    public demanderestaurationModel getDemanderestauration (@PathVariable Long y) {
        return eService.getDemanderestaurationById(y);
    }
    @PostMapping
    public demanderestaurationModel addDemanderestauration (@RequestBody demanderestaurationModel d) {
        return eService.addDemanderestauration(d);
    }

    @PutMapping("/{id}")
    public demanderestaurationModel editDemanderestauration(@PathVariable Long id, @RequestBody demanderestaurationModel d) {
    return eService.addDemanderestauration(d); }

    @GetMapping("/count")
    public Long countRestauAdmin() {
        return eService.countRestauAdmin();
    }
}

