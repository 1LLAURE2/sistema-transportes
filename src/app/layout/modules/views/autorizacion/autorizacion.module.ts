import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { ListaComponent } from './pages/lista/lista.component';
//
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [
    ListaComponent
  ],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    //
    NzTableModule,
    NzDividerModule,

  ]
})
export class AutorizacionModule { }
