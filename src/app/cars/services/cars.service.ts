import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {


  constructor(private httpClient: HttpClient) { }

  list() {
    return [
      {_id: '1', name:'CHEVROLET', category: 'SEDAN'}
    ];
  }
}
