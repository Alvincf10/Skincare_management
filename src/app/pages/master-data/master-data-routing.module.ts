import { StockComponent } from './stock/stock.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';

const routes: Routes = [
  {
    path:'ingredient',
    component:IngredientComponent
  },
  {
    path:'category',
    component:CategoryComponent
  },
  {
    path:'stock',
    component:StockComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
