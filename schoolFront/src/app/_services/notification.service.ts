import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class NotificationService {
   Url = 'http://localhost:8080/notif'

  constructor(private httpp: HttpClient) { }

  getAllNotification(){
    return this.httpp.get<any>(this.Url+"/");
  }
  getNotificationByIdParent(idParent) {
    return this.httpp.get<any>(this.Url+"/byIdParent/"+`${idParent}`);
  }
  getNotificationById(id: any) {
    return this.httpp.get(`${this.Url}/${id}`);
  }
  
  deleteNotification(id: any) {
    return this.httpp.delete(`${this.Url}/${id}`)
  }
  updateNotification(eleve: any) {
   
    return this.httpp.put(`${this.Url}/${eleve.id}`, eleve);
  }
  addNotification(notifObj: any): Observable<any> {
    console.log('notifObj reçu par addNotification:', notifObj); // Log ajouté
    return this.httpp.post<any>(this.Url, notifObj);
  }
}