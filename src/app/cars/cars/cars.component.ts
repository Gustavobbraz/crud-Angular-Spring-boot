import { Component, OnInit } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { Car } from '../model/car';
import { CarsService } from '../services/cars.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../shared/components/error-dialog/error-dialog.component';




@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  [x: string]: any;

  cars$: Observable<Car[]>;

  displayedColumns = ['name', 'category'];




  constructor(
    private carsService: CarsService,
    public dialog: MatDialog) {

      this.cars$ = this.carsService.list()
      .pipe(
        catchError(error => {
          this.onError('Error ao carregar carros');
          return of([])
        })
      );

}

onError(errorMsg: string) {
  this.dialog.open(ErrorDialogComponent, {
    data: errorMsg
  });
}


  ngOnInit(): void {}
}
function openDialog() {

}

