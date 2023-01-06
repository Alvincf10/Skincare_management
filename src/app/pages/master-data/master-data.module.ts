import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StockComponent } from './stock/stock.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    IngredientComponent,
    StockComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule
  ]
})
export class MasterDataModule { }
