import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private hebergementDataSubject = new BehaviorSubject<any>(null);
  hebergementData$ = this.hebergementDataSubject.asObservable();

  constructor() { }

  setHebergementData(data: any): void {
    console.log('Données émises depuis DataTransferService :', data);
    this.hebergementDataSubject.next(data);
  }
  
}
