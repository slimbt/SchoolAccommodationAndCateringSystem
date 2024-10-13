import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  Url = 'http://localhost:8080/eleve'
  constructor(private httpp : HttpClient) { 

  }

  getAllEleves(){
    return this.httpp.get<any>(this.Url+"/");
  }
  getAllEleve(idParent) {
    return this.httpp.get<any>(this.Url+"/byIdParent/"+`${idParent}`);
  }
  getEleveById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteEleve(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateEleve(eleve: any) {
   
    return this.httpp.put(`${this.Url}/${eleve.id}`, eleve);
  }
  addEleve(eleve:any){
    return this.httpp.post(this.Url,eleve)
  }
  getNumberOfEleve(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
}