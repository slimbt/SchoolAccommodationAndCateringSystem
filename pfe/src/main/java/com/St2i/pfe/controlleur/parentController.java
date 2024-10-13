package com.St2i.pfe.controlleur;



import com.St2i.pfe.modele.Employee;
import com.St2i.pfe.modele.parentModel;
import com.St2i.pfe.repo.parentRepo;

import com.St2i.pfe.service.parentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/parent")
public class parentController {


    @Autowired
    public parentService eService;
    @GetMapping("/")
    public List<parentModel> getAllParent() {return eService.getAllParent();}

    @DeleteMapping("/{x}")
    public void deleteParent(@PathVariable Long x) {
        eService.deleteParentById(x);
    }
    @GetMapping("/{y}")
    public parentModel getParent (@PathVariable Long y) {
        return eService.getParentById(y);
    }
    @PostMapping
    public parentModel addParent (@RequestBody parentModel parent) {
        return eService.addParent(parent);
    }
    @PutMapping("/{id}")
    public parentModel editParent(@PathVariable Long id, @RequestBody parentModel parent) {
        return eService.addParent(parent);
    }
    @GetMapping("/count")
    public Long countParents() {
        return eService.countParents();
    }
}
