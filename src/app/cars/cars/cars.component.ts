import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Car } from '../model/car';
import { CarsService } from '../services/cars.service';
import { Observable } from 'rxjs/internal/Observable';




@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars$: Observable<Car[]>;

  displayedColumns = ['name', 'category'];



  constructor(private carsService: CarsService) {

      this.cars$ = this.carsService.list();


}

  ngOnInit(): void {}
}
