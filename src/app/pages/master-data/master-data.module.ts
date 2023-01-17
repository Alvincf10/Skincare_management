import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StockComponent } from './stock/stock.component';
import { CategoryComponent } from './category/category.component';
import { ActionComponent } from './stock/action/action.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionCategoryComponent } from './category/action-category/action-category.component';
import { ActionIngredientComponent } from './ingredient/action-ingredient/action-ingredient.component';


@NgModule({
  declarations: [
    IngredientComponent,
    StockComponent,
    CategoryComponent,
    ActionComponent,
    ActionCategoryComponent,
    ActionIngredientComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule,
    MatDialogModule,
    FormsModule
  ]
})
export class MasterDataModule { }
