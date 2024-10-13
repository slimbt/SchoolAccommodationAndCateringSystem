import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  Url = 'http://localhost:8080/reponses'
  constructor(private httpp:HttpClient) { }
  getAllReponse(){
    return this.httpp.get<any>(this.Url+"/");
  }
  getAllReponses(idParent) {
    return this.httpp.get<any>(this.Url+"/reponse/"+`${idParent}`);
  }
  getReponseById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteReponse(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateReponse(reclamation: any) {
   
    return this.httpp.put(`${this.Url}/${reclamation.id}`, reclamation);
  }
  addReponse(reclamation:any){
    return this.httpp.post(this.Url,reclamation)
  }
}
