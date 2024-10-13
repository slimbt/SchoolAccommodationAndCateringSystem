import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurationService {

  Url = 'http://localhost:8080/demanderestauration'
  constructor(private httpp : HttpClient) { }

  getAllDemanderestauration() {
    return this.httpp.get<any>(this.Url+"/");
  }
  getDemanderestaurationById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteDemanderestauration(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateDemanderestauration(resttauration: any) {
   
    return this.httpp.put(`${this.Url}/${resttauration.id}`, resttauration);
  }
  addDemanderestauration(resttauration:any){
    return this.httpp.post(this.Url,resttauration)
  }


  getNumberOfRestaurationAdmin(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
  
}