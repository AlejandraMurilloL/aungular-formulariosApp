import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Lapiz'),
  //   precio: new FormControl(900),
  //   existencias: new FormControl(100),
  // });

  // Más facil de leer con form Builder
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Lapiz', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]],
  })

  constructor(private formBuilder: FormBuilder) { }
}
