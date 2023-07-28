import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { CarsService } from '../../../services/cars.service';
import { Car } from 'src/app/cars/model/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit{



  form = this.formBuilder.group(  {
    _id: [''],
    name: [''],
    category: [''],
    manufacturer: [''],
    fabricationdate: ['']
  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CarsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {

    }

  ngOnInit(): void {
    const car: Car = this.route.snapshot.data['Car']
    this.form.setValue({
      _id: car._id,
      name: car.name,
      category: car.category,
      manufacturer: car.manufacturer,
      fabricationdate: car.fabricationdate
    });

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(result => this.onSuccess(), error => this.onError()
);

  }

  onCancel(){
  this.location.back();

}

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso.', '', { duration : 5000});
    this.onCancel();
}

    private onError(){
       this.snackBar.open('Error ao salvar o curso.', '', { duration : 5000});
  }
}
