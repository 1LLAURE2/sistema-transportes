import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaComponent } from './pages/lista/lista.component';


@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
