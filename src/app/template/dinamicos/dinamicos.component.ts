import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoFav: string = '';

  persona: Persona = {
    nombre: 'Alejandra',
    favoritos: [
      { id: 1, nombre: 'Halo'},
      { id: 2, nombre: 'Hercules'},
      { id: 3, nombre: 'PES'},
    ]
  };

  guardar(): void {
    console.log('Form Posteado');
  }

  eliminar(indice: number): void {
    this.persona.favoritos.splice(indice, 1);
  }

  agregarFav(): void {
    const nuevoJuego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFav
    }

    this.persona.favoritos.push({...nuevoJuego});
    this.nuevoFav = '';
  }
}
