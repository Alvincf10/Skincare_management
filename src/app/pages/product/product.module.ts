import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ActionProductComponent } from './action-product/action-product.component';


@NgModule({
  declarations: [
    ProductComponent,
    ActionProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatDialogModule,
    FormsModule
  ]
})
export class ProductModule { }
