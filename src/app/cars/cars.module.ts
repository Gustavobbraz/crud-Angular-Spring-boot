import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';
import { SharedModule } from "../shared/shared.module";

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
        AppMaterialModule,
        SharedModule
    ]
})
export class CarsModule { }
