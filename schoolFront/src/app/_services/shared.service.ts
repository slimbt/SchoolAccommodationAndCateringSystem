// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private hebergementCount = new BehaviorSubject<number>(0);
  hebergementCount$ = this.hebergementCount.asObservable();

  updateHebergementCount(count: number) {
    this.hebergementCount.next(count);
  }
}
