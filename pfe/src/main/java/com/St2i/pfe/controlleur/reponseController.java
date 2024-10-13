package com.St2i.pfe.controlleur;



import com.St2i.pfe.modele.reponseModel;
import com.St2i.pfe.service.reponseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/reponses")
public class reponseController {
    @Autowired
    public reponseService eService;
    @GetMapping("/")
    public List<reponseModel> getAllReponse() {
        return eService.getAllReponse();
    }

    @DeleteMapping("/{x}")
    public void deleteReclamations(@PathVariable Long x) {
        eService.deleteReponseById(x);
    }
    @GetMapping("/{y}")
    public reponseModel getReclamations (@PathVariable Long y) {
        return eService.getReponseById(y);
    }
    @PostMapping
    public reponseModel addReclamations (@RequestBody reponseModel user) {
        return eService.addReponse(user);
    }
    @PutMapping("/{id}")
    public reponseModel editReponse (@PathVariable Long id, @RequestBody reponseModel r) {
        return eService.addReponse(r);
    }
    @GetMapping("reponse/{idParent}")
    public List<reponseModel> getReclamationByIdParent (@PathVariable Long idParent) {
        return eService.getReponseByIdParent(idParent);
    }
}


