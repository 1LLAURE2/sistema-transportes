import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[
      {path:'empresa',loadChildren:()=>import('./views/empresa/empresa.module').then(m=>m.EmpresaModule)},
      {path:'autorizacion',loadChildren:()=>import('./views/autorizacion/autorizacion.module').then(m=>m.AutorizacionModule)},
      {path:'representante',loadChildren:()=>import('./views/representante-legal/representante-legal.module').then(m=>m.RepresentanteLegalModule)},
      {path:'servicio',loadChildren:()=>import('./views/servicio/servicio.module').then(m=>m.ServicioModule)},
      {path:'tipo-identificacion',loadChildren:()=>import('./views/tipo-identificacion/tipo-identificacion.module').then(m=>m.TipoIdentificacionModule)},
      {path:'tipo-servicio',loadChildren:()=>import('./views/tipo-servicio/tipo-servicio.module').then(m=>m.TipoServicioModule)},
      //otras rutas
    ]
  },
  {
    path:'**',redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
