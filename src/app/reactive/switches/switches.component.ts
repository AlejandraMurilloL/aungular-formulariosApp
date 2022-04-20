import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.miFormulario.reset(this.persona);
    this.miFormulario.reset({ 
      ...this.persona, // Para enviar todas las propiedades que tiene persona, mas las que yo quiera añadir
      terminos: false
    });

    this.miFormulario.valueChanges.subscribe(({terminos, ...rest}) => {
      // Asi hacemos desestructuracion, obteniendo por un lado los terminos y por otro las demas propiedades ...rest
      this.persona = rest;
    });
  }

  guardar(): void {
    const formValue = {...this.miFormulario.value};
    delete formValue.terminos;
    console.log(formValue);

    this.persona = formValue;
  }
}
