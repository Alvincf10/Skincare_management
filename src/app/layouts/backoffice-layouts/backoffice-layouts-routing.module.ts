import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { BackofficeLayoutsComponent } from './backoffice-layouts.component';

const routes: Routes = [
  {
    path:'',
    component:BackofficeLayoutsComponent,
    children:[
      {
        path:'dashboard',
        component:dashboardComponent
      },
      {
        path:'product',
        loadChildren: () => import('../../pages/product/product.module').then(m =>m.ProductModule)
      },
      {
        path:'master-data',
        loadChildren: () => import('../../pages/master-data/master-data.module').then(m =>m.MasterDataModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeLayoutsRoutingModule { }
