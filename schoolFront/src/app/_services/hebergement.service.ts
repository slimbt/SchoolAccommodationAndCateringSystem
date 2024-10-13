import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HebergementService {

  Url = 'http://localhost:8080/demandehebergement'
  constructor(private httpp : HttpClient) { }

  getAllDemandehebergement() {
    return this.httpp.get<any>(this.Url+"/");
  }
  getDemandehebergementById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteDemandehebergement(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateDemandehebergement(hebergement: any) {
   
    return this.httpp.put(`${this.Url}/${hebergement.id}`, hebergement);
  }
  addDemandehebergement(hebergement:any){
    return this.httpp.post(this.Url,hebergement)
  }
  getNumberOfHebergementAdmin(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
}
