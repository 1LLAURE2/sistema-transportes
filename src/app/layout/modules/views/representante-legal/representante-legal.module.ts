import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentanteLegalRoutingModule } from './representante-legal-routing.module';
import { ListaComponent } from './pages/lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    RepresentanteLegalRoutingModule
  ]
})
export class RepresentanteLegalModule { }
