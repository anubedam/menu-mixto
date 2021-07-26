import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Módulo de rutas de contacto */
import { ContactoRoutingModule } from './contacto-routing.module';

/* Componentes que pertenecen a este módulo */
import { ContactoComponent } from './pages/contacto/contacto.component';

@NgModule({
  declarations: [
    /* Componentes del módulo */
    ContactoComponent
  ],
  imports: [
    /* Módulos necesarios para nuestros componentes */
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }