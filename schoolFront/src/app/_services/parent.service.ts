import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  Url = 'http://localhost:8080/parent'
  constructor(private httpp : HttpClient) { }


  
  getAllParent() {
    return this.httpp.get<any>(this.Url+"/");
  }
  getParentById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteParent(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateParent(parent: any) {
   
    return this.httpp.put(`${this.Url}/${parent.id}`, parent);
  }
  addParent(parent:any){
    return this.httpp.post(this.Url,parent)
  }

  getNumberOfParents(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
}