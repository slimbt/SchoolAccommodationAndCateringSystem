import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HebergementParentService {

  Url = 'http://localhost:8080/hebergements'
  idParent: any;
  constructor(private httpp : HttpClient) { }

  getAllHebergement() {
    return this.httpp.get<any>(this.Url+"/");
  }
  getHebergementById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteHebergement(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateHebergement(hebergement: any) {
   
    return this.httpp.put(`${this.Url}/${hebergement.id}`, hebergement);
  }
  addHebergement(hebergementData: any){
    const selectedEleve = `${hebergementData.selectedEleveNom} ${hebergementData.selectedElevePrenom}`;

    // Créer un payload pour l'ajout de l'hébergement
    const payload = {
   
      nom: hebergementData.nom,
      prenom: hebergementData.prenom,
      datedebut: hebergementData.datedebut,
      datefin: hebergementData.datefin,
      selectedEleve: selectedEleve, // Enregistrer le nom complet de l'élève
      cre: hebergementData.cre,
      libelle: hebergementData.libelle,
      typeChambre: hebergementData.typeChambre,
      message:hebergementData.message,
      idParent: hebergementData.idParent ,
      idEleve:hebergementData.idEleve
      
      // Ajouter d'autres propriétés si nécessaire
    };
    return this.httpp.post(this.Url,payload )
  }
  // Dans le service Angular (HebergementParentService)
  updateStatus(id: number, newStatus: string) {
    // Envoyer une requête HTTP PUT pour mettre à jour le statut
    return this.httpp.put<any>(`${this.Url}/${id}`, { status: newStatus });
}
getHebergementByParentId(idParent: any) {
  return this.httpp.get<any[]>(`${this.Url}/hebergement/${idParent}`); // Endpoint pour récupérer les feedbacks par ID du parent
}
getHebergementByEleveId(idEleve: any) {
  return this.httpp.get<any[]>(`${this.Url}/hebergementt/${idEleve}`); // Endpoint pour récupérer les feedbacks par ID du parent
}

getNumberOfHebergement(): Observable<number> {
  return this.httpp.get<number>(`${this.Url}/count`);
}
getNumberOfHebergementByCre(): Observable<any[]> {
  return this.httpp.get<any[]>(`${this.Url}/countByCre`);
}
}