import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  constructor() { }

  getData(): Observable<string> {
    return of('two')
      .pipe(delay(2000));
  }
}
