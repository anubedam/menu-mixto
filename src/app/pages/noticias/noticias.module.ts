import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componente de noticias */
import { NoticiasComponent } from './noticias.component';
import { NuevaNoticiaComponent } from './nueva-noticia/nueva-noticia.component';

import { Routes } from '@angular/router';
/* Ruta base /app/noticias */
export const noticiasRoutes: Routes = [
  { path: '', pathMatch: 'full', component: NoticiasComponent },
  { path: 'nueva-noticia', component: NuevaNoticiaComponent },
  { path: '**', component: NoticiasComponent }
];

@NgModule({
  declarations: [
    /* Componentes que pertenecen a este módulo */
    NoticiasComponent, 
    NuevaNoticiaComponent
  ],
  imports: [
    /* Módulos que utilizan los componentes de este módulo */
    CommonModule
  ],
  exports: [
    /* Componentes que utilizaremos fuera de este módulo */
    NoticiasComponent, 
    NuevaNoticiaComponent
  ]
})
export class NoticiasModule { }