import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { CarsRoutingModule } from '../cars-routing.module';
import { CarsComponent } from './cars.component';


@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
