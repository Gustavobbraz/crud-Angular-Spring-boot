import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup } from '@angular/forms';
import { CarsService } from '../services/cars.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit{



  form: FormGroup;



  constructor(private formBuilder: FormBuilder,
    private service: CarsService,
    private snackBar: MatSnackBar,
    private location: Location) {
      this.form = this.formBuilder.group(  {
        name: [''],
        category: [''],
        manufacturer: [''],
        fabricationdate:['']
      });
    }
  ngOnInit(): void {

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
