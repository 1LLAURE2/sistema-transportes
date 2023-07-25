import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './home/dashboard/dashboard.component';

//
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

// import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    // SharedModule,
    //
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    // NzSkeletonModule,
    NzIconModule,
    NzToolTipModule,
    NzButtonModule,
    NzDropDownModule,
    
  ]
})
export class ModulesModule { }
