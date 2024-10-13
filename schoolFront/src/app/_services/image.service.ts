import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:8080/api/images';

  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addImage(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
  deleteImage(imageId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${imageId}`;
    return this.http.delete<any>(deleteUrl);
  }

  updateImage(imageId: number, formData: FormData): Observable<any> {
    const updateUrl = `${this.apiUrl}/${imageId}`;
    return this.http.put<any>(updateUrl, formData);
  }
}
