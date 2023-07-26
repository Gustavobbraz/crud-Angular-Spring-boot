import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

import { CarsRoutingModule } from '../cars-routing.module';
import { CarsComponent } from './cars.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    CarsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CarsModule { }
