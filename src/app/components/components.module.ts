import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { CompanyComponent } from './company/company.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent, 
   // CompanyComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent, 
   // CompanyComponent
  ]
})
export class ComponentsModule { }
