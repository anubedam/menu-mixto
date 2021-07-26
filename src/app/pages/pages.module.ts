import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';

/* Módulo de rutas de pages */
import { PagesRoutingModule } from './pages-routing.module';

/* Módulo para utilizar el menú */
import { SharedModule } from '../shared/shared.module';

/* Módulos de las subopciones de app */
import { AnunciosModule } from './anuncios/anuncios.module';
import { FiestasModule } from './fiestas/fiestas.module';
import { NoticiasModule } from './noticias/noticias.module';

@NgModule({
  declarations: [
    /* Componentes propios del módulo pages */
    PagesComponent
  ],
  imports: [
    /* Módulos necesarios para mis componentes */
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    AnunciosModule,
    FiestasModule,
    NoticiasModule
  ]
})
export class PagesModule { }