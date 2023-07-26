import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';


@NgModule({
    declarations: [
        CarsComponent,
        CarFormComponent

    ],
    imports: [
        CommonModule,
        CarsRoutingModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        AppMaterialModule,
        SharedModule,
        ReactiveFormsModule


    ]
})
export class CarsModule { }
