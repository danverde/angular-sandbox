import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  getData(): Observable<string> {
    return of('one')
      .pipe(delay(1000));
  }
}
