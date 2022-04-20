import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Harry Potter', Validators.required],
      ['Titanic', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)

  get favoritos() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  campoInvalido(campo: string) {
    return this.miFormulario.controls[campo].touched && this.miFormulario.controls[campo].errors;
  }

  agregarFav(): void {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    //this.favoritos.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritos.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar(): void {
    if (this.miFormulario.invalid) 
    {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
  }

  borrar(favIndex: number): void {
    this.favoritos.removeAt(favIndex);
  }
}
