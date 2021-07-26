import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Rutas para los anuncios */
import { anunciosRoutes } from './anuncios/anuncios.module';
import { fiestasRoutes } from './fiestas/fiestas.module';
import { noticiasRoutes } from './noticias/noticias.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { 
    path: '',  /* Rutas base /app */
    component: PagesComponent,
    children: [
      { path: 'anuncios', children: anunciosRoutes },
      { path: 'fiestas', children: fiestasRoutes },
      { path: 'noticias', children: noticiasRoutes },
      { path: '**', redirectTo: 'anuncios'}          
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }