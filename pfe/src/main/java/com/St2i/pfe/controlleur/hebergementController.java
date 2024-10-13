package com.St2i.pfe.controlleur;

import com.St2i.pfe.modele.Hebergement;
import com.St2i.pfe.modele.eleveModel;

import com.St2i.pfe.service.hebergementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/hebergements")
public class hebergementController {


    @Autowired
    public hebergementService eService;
    @GetMapping("/")
    public List<Hebergement> getAllHebergement() {return eService.getAllHebergement();}

    @DeleteMapping("/{x}")
    public void deleteHebergement(@PathVariable Long x) {
        eService.deleteHebergementById(x);
    }
    @GetMapping("/{y}")
    public Hebergement getHebergement(@PathVariable Long y) {
        return eService.getHebergementById(y);
    }
    @PostMapping
    public Hebergement addHebergement(@RequestBody Hebergement hebergement) {
        return eService.addHebergement(hebergement);
    }
    // Dans le contrôleur Spring Boot (HebergementController)
    @PutMapping("/{id}")
    public Hebergement editHebergement(@PathVariable Long id, @RequestBody Hebergement hebergement) {
        // Récupérer l'hébergement existant par ID
        Hebergement existingHebergement = eService.getHebergementById(id);
        if (existingHebergement != null) {
            // Mettre à jour la colonne "Status"
            existingHebergement.setStatus(hebergement.getStatus()); // Mettre à jour avec le statut de la requête

            // Enregistrer les modifications dans la base de données
            return eService.addHebergement(existingHebergement);
        } else {
            // Gérer le cas où aucun hébergement correspondant n'est trouvé
            // Retourner null ou lancer une exception selon votre logique métier
            return null;
        }
    }

    @GetMapping("hebergement/{idParent}")
    public List<Hebergement> getHebergementByIdParent (@PathVariable Long idParent) {
        return eService.getHebergementByIdParent(idParent);
    }
    @GetMapping("hebergementt/{idEleve}")
    public List<Hebergement> getHebergementByIdEleve (@PathVariable Long idEleve) {
        return eService.getHebergementByIdEleve(idEleve);
    }

    @GetMapping("/count")
    public Long countHebergement() {
        return eService.countHebergement();
    }

    @GetMapping("/countByCre")
    public List<Object[]> countHebergementByCre() {
        return eService.countHebergementByCre();
    }
}




