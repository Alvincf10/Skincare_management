import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeLayoutsRoutingModule } from './backoffice-layouts-routing.module';
import { BackofficeLayoutsComponent } from './backoffice-layouts.component';
import { HeaderComponent } from 'src/app/inheritComponent/header/header.component';
import { SidebarComponent } from 'src/app/inheritComponent/sidebar/sidebar.component';


@NgModule({
  declarations: [
    BackofficeLayoutsComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BackofficeLayoutsRoutingModule
  ]
})
export class BackofficeLayoutsModule { }
