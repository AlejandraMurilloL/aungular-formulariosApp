import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPettern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPettern)]],
    email: ['', [Validators.required, Validators.pattern(emailPattern)]],
    username: ['', [Validators.required, noPuedeSerStrider]],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alejandra Murillo',
      email: 'ale@gmail.com',
      username: 'ale'
    });
  }

  campoInvalido(campo: string): boolean | undefined {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  doSubmit(): void {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
