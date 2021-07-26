import { Component } from '@angular/core';

export interface Ruta{
  nombre: string;
  ruta: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
    ul li{
      cursor: pointer;
    }
    `
  ]
})
export class MenuComponent {

  // Rutas de la aplicación
  private _rutas: Ruta[] = [];

  constructor(){
    this.cargarRutas();
  }

  cargarRutas(){
    this._rutas.push({ nombre: 'login', ruta: '/auth/login' });
    this._rutas.push({ nombre: 'registro', ruta: '/auth/registro' });
    this._rutas.push({ nombre: 'contacto', ruta: '/contacto' });
    this._rutas.push({ nombre: 'Noticias', ruta: '/app/noticias' });
    this._rutas.push({ nombre: 'Nueva noticia', ruta: '/app/noticias/nueva-noticia' });
    this._rutas.push({ nombre: 'Fiestas', ruta: '/app/fiestas' });
    this._rutas.push({ nombre: 'Nueva fiesta', ruta: '/app/fiestas/nueva-fiesta' });
    this._rutas.push({ nombre: 'Anuncios', ruta: '/app/anuncios' });
    this._rutas.push({ nombre: 'Nuevo anuncio', ruta: '/app/anuncios/nuevo-anuncio' });
  }

  get opciones(): Ruta[]{
    return [ ...this._rutas ];
  }
}