import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoIdentificacionRoutingModule } from './tipo-identificacion-routing.module';
import { ListaComponent } from './pages/lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    TipoIdentificacionRoutingModule
  ]
})
export class TipoIdentificacionModule { }
