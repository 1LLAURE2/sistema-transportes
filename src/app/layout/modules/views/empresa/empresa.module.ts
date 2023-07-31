import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaComponent } from './components/lista/lista.component';

//
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CrearComponent } from './components/crear/crear.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
//PARA EL FORMULARIO
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';


import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaComponent,
    CrearComponent,
    HomeComponent
  ],
  imports: [
    
    //
    CommonModule,
    EmpresaRoutingModule,
    ReactiveFormsModule,
    //
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    NzTagModule,
    NzInputModule,
    NzFormModule,
    //
    NzModalModule

  ]
})
export class EmpresaModule { }
