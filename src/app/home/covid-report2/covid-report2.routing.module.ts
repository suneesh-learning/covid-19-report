import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidReport2Component } from './covid-report2.component';


const routes: Routes = [

  {
    path: '', component: CovidReport2Component,
    children: [

  // {
  //   path: 'parent-menu-1',
  //   loadChildren: './parentmenu1/parentmenu1.module#Parentmenu1Module',

  // },
  //   {
  //   path: 'product',
  //   loadChildren: './product/product.module#ProductModule',

  // },
  //   {
  //   path: 'customer',
  //   loadChildren: './customer/customer.module#CustomerModule',

  // },
    ]
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CovidReoprt2RoutingModule { }
