package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.reclamationsModel;

import com.St2i.pfe.service.reclamationsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/reclamations")
public class reclamationsController {
    @Autowired
    public reclamationsService eService;
    @GetMapping("/")
    public List<reclamationsModel> getAllReclamations() {
        return eService.getAllReclamations();
    }

    @DeleteMapping("/{x}")
    public void deleteReclamations(@PathVariable Long x) {
        eService.deleteReclamationsById(x);
    }
    @GetMapping("/{y}")
    public reclamationsModel getReclamations (@PathVariable Long y) {
        return eService.getReclamationsById(y);
    }
    @PostMapping
    public reclamationsModel addReclamations (@RequestBody reclamationsModel user) {
        return eService.addReclamations(user);
    }
    @PutMapping("/{id}")
    public reclamationsModel editReclamations(@PathVariable Long id, @RequestBody reclamationsModel reclamation) {
        // Récupérer l'hébergement existant par ID
        reclamationsModel existingReclamation = eService.getReclamationsById(id);
        if (existingReclamation!= null) {
            // Mettre à jour la colonne "Status"
            existingReclamation.setStatus(reclamation.getStatus()); // Mettre à jour avec le statut de la requête

            // Enregistrer les modifications dans la base de données
            return eService.addReclamations(existingReclamation );
        } else {
            // Gérer le cas où aucun hébergement correspondant n'est trouvé
            // Retourner null ou lancer une exception selon votre logique métier
            return null;
        }
    }
    @GetMapping("reclamation/{idParent}")
    public List<reclamationsModel> getReclamationByIdParent (@PathVariable Long idParent) {
        return eService.getReclamationByIdParent(idParent);
    }
}


