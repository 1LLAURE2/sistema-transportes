import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoServicioRoutingModule } from './tipo-servicio-routing.module';
import { ListaComponent } from './pages/lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    TipoServicioRoutingModule
  ]
})
export class TipoServicioModule { }
