package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.creModel;

import com.St2i.pfe.service.creService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cre")
public class creController {
    @Autowired
    public creService eService;
    @GetMapping("/")
    public List<creModel> getAllCre() {return eService.getAllCre();}

    @DeleteMapping("/{x}")
    public void deleteCre(@PathVariable Long x) {
        eService.deleteCreById(x);
    }
    @GetMapping("/{y}")
    public creModel getCre (@PathVariable Long y) {
        return eService.getCreById(y);
    }
    @PostMapping
    public creModel addCre(@RequestBody creModel cre) {
        return eService.addCre(cre);
    }
    @PutMapping("/{id}")
    public creModel editCre(@PathVariable Long id, @RequestBody creModel cre) {
        return eService.addCre(cre);
    }

    @GetMapping("/count")
    public Long countCre() {
        return eService.countCre();
    }
    }

