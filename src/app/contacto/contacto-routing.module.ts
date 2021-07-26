import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Componentes que se renderizan */
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  /* Ruta base: /contacto */
  { path: '', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }