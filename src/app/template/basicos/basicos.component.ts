import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardar(formulario: NgForm): void {
    console.log('Submit hecho');
    console.log('%cbasicos.component.ts line:18 formulario', 'color: #007acc;', formulario.value);
  }
}
