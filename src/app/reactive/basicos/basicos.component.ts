import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  miFormulario: FormGroup = new FormGroup({
    name: new FormControl('Lapiz')
  });

  constructor() { }
}
