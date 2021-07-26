import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componente con las rutas principales */
import { AuthRoutingModule } from './auth-routing.module';

/* Componentes del módulo Auth */
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    /* Componentes que pertenecen a este módulo */
    LoginComponent, 
    RegistroComponent
  ],
  imports: [
    /* Módulos que necesitan nuestros componentes */
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }