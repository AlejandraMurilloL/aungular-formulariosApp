import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  terminosYCondiciones: boolean = false;

  persona = {
    genero: '',
    notificaciones: true
  };
}
