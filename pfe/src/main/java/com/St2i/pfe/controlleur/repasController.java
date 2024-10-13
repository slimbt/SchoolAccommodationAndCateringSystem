package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.repasModel;

import com.St2i.pfe.service.repasService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/stats")
public class repasController {
    @Autowired
    public repasService eService;
    @GetMapping("/")
    public List<repasModel> getAllRepas() {
        return eService.getAllRepas();
    }

    @DeleteMapping("/{x}")
    public void deleteRepas(@PathVariable Long x) {
        eService.deleteRepasById(x);
    }
    @GetMapping("/{y}")
    public repasModel getRepas (@PathVariable Long y) {
        return eService.getRepasById(y);
    }
    @PostMapping
    public repasModel addRepas (@RequestBody repasModel user) {
        return eService.addRepas(user);
    }
    @PutMapping
    public repasModel editRepas(@RequestBody repasModel rep) {
        return eService.addRepas(rep);}
}


