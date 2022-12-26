import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterDataRoutingModule } from './master-data-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [
    IngredientComponent
  ],
  imports: [
    CommonModule,
    MasterDataRoutingModule
  ]
})
export class MasterDataModule { }
