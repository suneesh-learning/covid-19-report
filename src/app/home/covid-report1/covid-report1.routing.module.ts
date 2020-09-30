import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidReport1Component } from './covid-report1.component';


const routes: Routes = [

  {
    path: '', component: CovidReport1Component,
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
export class CovidReoprt1RoutingModule { }
