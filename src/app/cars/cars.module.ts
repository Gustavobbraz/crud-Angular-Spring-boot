import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './containers/cars/cars.component';
import { SharedModule } from "../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';
import { CarFormComponent } from './containers/cars/car-form/car-form.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';


@NgModule({
    declarations: [
        CarsComponent,
        CarFormComponent,
        CarsListComponent

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
