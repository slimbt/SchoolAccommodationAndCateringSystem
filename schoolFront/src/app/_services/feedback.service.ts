import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  Url = 'http://localhost:8080/feedback'
  constructor(private httpp : HttpClient) { }

  getAllFeedback() {
    return this.httpp.get<any>(this.Url+"/");
  }
  getFeedbackById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteFeedback(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateFeedback(feedback: any) {
   
    return this.httpp.put(`${this.Url}/${feedback.id}`, feedback);
  }
  addFeedback(feedback:any){
    return this.httpp.post(this.Url,feedback)
  }
  getFeedbacksByParentId(idParent: any) {
    return this.httpp.get<any[]>(`${this.Url}/parent/${idParent}`); // Endpoint pour récupérer les feedbacks par ID du parent
  }

  getNumberOfFeedback(): Observable<number> {
    return this.httpp.get<number>(`${this.Url}/count`);
  }
}