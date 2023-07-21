import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./layout/auth/auth.module').then(m=>m.AuthModule)},
  {path:'dashboard',loadChildren:()=>import('./layout/modules/modules.module').then(m=>m.ModulesModule)},
  {path:'**',redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
