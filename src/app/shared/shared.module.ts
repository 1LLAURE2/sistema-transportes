import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiderComponent } from './components/sider/sider.component';

// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzIconModule } from 'ng-zorro-antd/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    //
    // NzLayoutModule,
    // NzBreadCrumbModule,
    // NzMenuModule,
    // NzIconModule

  ],
  exports:[
    SiderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
