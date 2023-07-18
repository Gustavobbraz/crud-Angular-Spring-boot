import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';
import {MatCardModule} from '@angular/material/card';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
@NgModule({
  declarations: [
    CarsComponent

  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    AppMaterialModule
  ]
})
export class CarsModule { }
