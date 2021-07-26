import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes del módulo fiestas */
import { FiestasComponent } from './fiestas.component';
import { NuevaFiestaComponent } from './nueva-fiesta/nueva-fiesta.component';

/* Rutas base /app/fiestas */
import { Routes } from '@angular/router';
export const fiestasRoutes: Routes = [
  { path: '', pathMatch: 'full', component: FiestasComponent },
  { path: 'nueva-fiesta', component: NuevaFiestaComponent },
  { path: '**', component: FiestasComponent }
];

@NgModule({
  declarations: [
    /* Componentes que pertenecen a este módulo */
    FiestasComponent, 
    NuevaFiestaComponent
  ],
  imports: [
    /* Módulos que necesitan nuestros componentes */
    CommonModule
  ],
  exports: [
    /* Componentes que son utilizados en otros sitios */
    FiestasComponent, 
    NuevaFiestaComponent
  ]
})
export class FiestasModule { }