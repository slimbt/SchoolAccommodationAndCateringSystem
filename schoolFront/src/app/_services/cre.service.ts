import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreService {

  Url = 'http://localhost:8080/cre'
  constructor(private httpp : HttpClient) { 

  }

  getAllCre(){
    return this.httpp.get<any>(this.Url+"/");
  }
 
  getCreById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteCre(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateCre(cre: any) {
   
    return this.httpp.put(`${this.Url}/${cre.id}`, cre);
  }
  addCre(cre:any){
    return this.httpp.post(this.Url,cre)
  }
  getNumberOfCre(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
}