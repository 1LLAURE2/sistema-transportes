import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaComponent } from './pages/lista/lista.component';

//
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CrearComponent } from './pages/crear/crear.component';


@NgModule({
  declarations: [
    ListaComponent,
    CrearComponent
  ],
  imports: [
    
    //
    CommonModule,
    EmpresaRoutingModule,
    //
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    NzTagModule,
    //

  ]
})
export class EmpresaModule { }
