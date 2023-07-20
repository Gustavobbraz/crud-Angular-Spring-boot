import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Car } from '../model/car';
import * as rxjs from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  	private readonly API = '/assets/cars.json';

    constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Car[]>(this.API)
    .pipe(
      rxjs.first(),
      rxjs.delay(2000),
      rxjs.tap(cars => console.log(cars))
    );
  }
}
