import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoInvalido(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  }

  agregarFav(): void {

  }

  guardar(): void {
    if (this.miFormulario.invalid) 
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }
}
