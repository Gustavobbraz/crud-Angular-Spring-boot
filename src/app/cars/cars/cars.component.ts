import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { Car } from '../model/car';
import { CarsService } from '../services/cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Car[] = [
    {
      _id: '1', name:'CHEVROLET', category: 'SEDAN'
    }
  ];
  displayedColumns = ['name', 'category'];

 

  constructor(private carsService: CarsService) {

    //this.carsService = new CarsService();//
    //this.cars = this.carsService.list(); //

  }

  ngOnInit(): void {}
}
