import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';


import { CarsRoutingModule } from '../cars-routing.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MatCardModule,

    CarsRoutingModule
  ]
})
export class CarsModule { }
