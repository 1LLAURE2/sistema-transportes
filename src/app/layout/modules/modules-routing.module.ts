import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,
    children:[
      {path:'empresa',loadChildren:()=>import('./views/empresa/empresa.module').then(m=>m.EmpresaModule)},
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
