import { Injectable } from '@angular/core';

import { interval, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  clock(): Observable<Number> {
    return interval(1000);
  }
}
