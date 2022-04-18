import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  nombreNoValido(): boolean {
    return this.formulario?.controls['producto']?.invalid && 
           this.formulario?.controls['producto']?.touched;
  }

  precioNoValido(): boolean {
    return this.formulario?.controls['precio']?.value < 0 && 
           this.formulario?.controls['precio']?.touched;
  }

  //guardar(formulario: NgForm): void {
  guardar(): void {
    console.log('%cbasicos.component.ts line:18 formulario', 'color: #007acc;', this.formulario);
  }
}
