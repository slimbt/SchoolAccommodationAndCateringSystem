import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, role: string[], nom:String, prenom:String,   cin:number,  poste:String,  profession:String,adresse:String, telephone:number,photoPath: String): Observable<any> {
    
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        role,
        nom,
        prenom,
        poste,
        profession,
        cin,
        adresse,
        telephone,
        photoPath
      },
      httpOptions
    );
  }
  getUserDetails(): Observable<any> {
    return this.http.get(AUTH_API + 'user-details', httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
