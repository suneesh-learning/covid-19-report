import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [

  {
    path: 'covid-report-1',
    loadChildren: './covid-report1/covid-report1.module#CovidReport1Module',

  },
  {
    path: 'covid-report-2',
    loadChildren: './covid-report2/covid-report2.module#CovidReport2Module',

  }
  // {
  //   path: 'parent-menu-3',
  //   loadChildren: './parentmenu3/parentmenu3.module#Parentmenu3Module',

  // },

    ]
},


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
