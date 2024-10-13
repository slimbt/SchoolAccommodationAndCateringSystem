package com.St2i.pfe.controlleur;



import com.St2i.pfe.modele.Restauration;
import com.St2i.pfe.service.restaurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/restaurations")
public class restaurationController {
    @Autowired
public restaurationService eService;
    @GetMapping("/")
    public List<Restauration> getAllRestauration() {return eService.getAllRestauration();}

    @DeleteMapping("/{x}")
    public void deleteRestauration(@PathVariable Long x) {
        eService.deleteRestaurationById(x);
    }
    @GetMapping("/{y}")
    public Restauration getRestauration(@PathVariable Long y) {
        return eService.getRestaurationById(y);
    }
    @PostMapping
    public Restauration addRestauration(@RequestBody Restauration restauration) {
        return eService.addRestauration(restauration);
    }
    // Dans le contrôleur Spring Boot (HebergementController)
    @PutMapping("/{id}")
    public Restauration editRestauration(@PathVariable Long id, @RequestBody Restauration restauration) {
        // Récupérer l'hébergement existant par ID
        Restauration existingRestauration = eService.getRestaurationById(id);
        if (existingRestauration != null) {
            // Mettre à jour la colonne "Status"
            existingRestauration.setStatus(restauration.getStatus()); // Mettre à jour avec le statut de la requête

            // Enregistrer les modifications dans la base de données
            return eService.addRestauration(existingRestauration);
        } else {
            // Gérer le cas où aucun hébergement correspondant n'est trouvé
            // Retourner null ou lancer une exception selon votre logique métier
            return null;
        }
    }

    @GetMapping("restauration/{idParent}")
    public List<Restauration> getRestaurationByIdParent (@PathVariable Long idParent) {
        return eService.getRestaurationByIdParent(idParent);
    }
    @GetMapping("restaurationn/{idEleve}")
    public List<Restauration> getRestaurationByIdEleve (@PathVariable Long idEleve) {
        return eService.getRestaurationByIdEleve(idEleve);
    }

    @GetMapping("/count")
    public Long countRestauration() {
        return eService.countRestauration();
    }

    @GetMapping("/countByCree")
    public List<Object[]> countRestaurationByCre() {
        return eService.countRestaurationByCre();
    }
}




