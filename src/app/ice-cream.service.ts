import { Injectable } from '@angular/core';
import { IceCream } from './iceCreamInterface';
import { ICESCREAMFLAVORS } from './mock-flavors';
//Observable object will allow us to return data asynchronously.
import { Observable, of } from 'rxjs';
// Bringing in MessageService
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class IceCreamService {
  getIceCream(): Observable<IceCream[]> {
    this.messageService.add('IceCreamService: fetched ice cream flavors...')
    return of(ICESCREAMFLAVORS);
  }
  constructor(private messageService: MessageService) { }
}
