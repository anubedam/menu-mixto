import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes del módulo anuncio*/
import { NuevoAnuncioComponent } from './nuevo-anuncio/nuevo-anuncio.component';
import { AnunciosComponent } from './anuncios.component';

import { Routes } from '@angular/Router';
/* Ruta base /app/anuncios */
export const anunciosRoutes: Routes = [
    { path: '', pathMatch: 'full', component: AnunciosComponent },
    { path: 'nuevo-anuncio', component: NuevoAnuncioComponent },
    { path: '**', component: AnunciosComponent }
];

@NgModule({
  declarations: [
    /* Componentes que pertenecen al módulo anuncio */
    NuevoAnuncioComponent, 
    AnunciosComponent
  ],
  imports: [
    /* Módulos que utilizan los componentes de este módulo */
    CommonModule
  ],
  exports: [
    /* Componentes que vamos a utilizar fuera de este módulo */
    NuevoAnuncioComponent, 
    AnunciosComponent
  ]
})
export class AnunciosModule { }