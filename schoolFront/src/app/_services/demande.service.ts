import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  private apiUrl = 'http://localhost:8080/demandes';

  constructor(private http: HttpClient) {}

  sendNotification(userId: number, message: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send/${userId}`, message);
  }
}