import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Car } from '../../model/car';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {


  @Input() cars: Car[] = [];
  @Output() add  = new EventEmitter( false);
  @Output() edit  = new EventEmitter( false);
  @Output() remove  = new EventEmitter( false);


  readonly displayedColumns = ['_id','name', 'category', 'manufacturer','fabricationdate', 'actions' ];
  

  constructor() { }

  ngOnInit(): void {
}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(car: Car) {
    this.edit.emit(car);

  }

  onDelete(car: Car) {
    this.remove.emit(car);
  }


}
