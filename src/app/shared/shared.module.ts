import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

/* Para poder hacer la navegación en el menú */
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    /* Componentes propios de Shared */
    MenuComponent
  ],
  imports: [
    /* Módulos que necesitan mis componentes */
    CommonModule,
    RouterModule
  ],
  exports: [
    /* Elementos que renderizamos en otros módulos */
    MenuComponent
  ]
})
export class SharedModule { }