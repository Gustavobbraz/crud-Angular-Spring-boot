import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    CarsComponent

  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class CarsModule { }
