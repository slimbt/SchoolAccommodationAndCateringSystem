import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  Url = 'http://localhost:8080/reclamations'
  constructor(private httpp : HttpClient) { 

  }

  getAllReclamations(){
    return this.httpp.get<any>(this.Url+"/");
  }
  getAllReclamation(idParent) {
    return this.httpp.get<any>(this.Url+"/reclamation/"+`${idParent}`);
  }
  getReclamationsById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteReclamations(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateReclamations(reclamation: any) {
   
    return this.httpp.put(`${this.Url}/${reclamation.id}`, reclamation);
  }
  addReclamations(reclamation:any){
    return this.httpp.post(this.Url,reclamation)
  }
  updateStatus(id: number, newStatus: string) {
    // Envoyer une requête HTTP PUT pour mettre à jour le statut
    return this.httpp.put<any>(`${this.Url}/${id}`, { status: newStatus });
}
}