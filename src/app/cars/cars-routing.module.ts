import { Car } from './model/car';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './containers/cars/cars.component';
import { CarFormComponent } from './containers/cars/car-form/car-form.component';
import { CarResolver } from './guards/car.resolver';

const routes: Routes = [
  { path:  '', component: CarsComponent },
  { path:  'new', component: CarFormComponent, resolve: { Car: CarResolver} },
  { path:  'edit/:id', component: CarFormComponent, resolve: { Car: CarResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
