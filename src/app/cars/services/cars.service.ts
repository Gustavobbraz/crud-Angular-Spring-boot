import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Car } from '../model/car';
import * as rxjs from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  	private readonly API = '/api/cars';

    constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Car[]>(this.API)
    .pipe(
      rxjs.first(),
      rxjs.delay(2000),
      rxjs.tap(cars => console.log(cars))
    );
  }
    loadById(id: string) {
      return this.httpClient.get<Car>(`${this.API}/${id}`);
    }

    save(record: Partial<Car>) {
      console.log(record);
      if (record._id) {
        console.log('update')
        return this.update(record);
      }
      console.log("create");
      return this.create(record);

  }

  private create(record: Partial<Car>) {
    return this.httpClient.post<Car>(this.API, record).pipe(rxjs.first());
  }

  private update(record: Partial<Car>) {
    return this.httpClient.put<Car>(`${this.API}/${record._id}`, record).pipe(rxjs.first());
  }

  
}
