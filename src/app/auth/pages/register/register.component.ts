import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPettern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'passwordConfirm')]
  });

  get emailErrorMsg(): string {
    const email = this.miFormulario.get('email');

    if (email?.getError('required')){
      return 'El email es un dato obligatorio';
    }

    if(email?.getError('pattern')) {
      return 'El email ingresado no tiene un formato correcto';
    }

    if(email?.getError('emailYaExiste')){
      return 'El email ingresado ya está registrado';
    }

    return '';
  }

  constructor(private fb: FormBuilder, 
              private validatorService: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Alejandra Murillo',
      email: 'test1@test.com',
      username: 'ale',
      password: '123456',
      passwordConfirm: '123456'
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
