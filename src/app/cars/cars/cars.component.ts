import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Car } from '../model/car';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [
    { _id: '1', name: 'CHEVROLET', category: 'SEDAN'}
  ];
  displayedColumns = ['name', 'category'];

  constructor() { // this.cars = []/
  }

  ngOnInit(): void {

  }
}
