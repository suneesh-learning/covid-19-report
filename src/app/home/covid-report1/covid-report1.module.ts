import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidReport1Component } from './covid-report1.component';
import{CovidReoprt1RoutingModule} from './covid-report1.routing.module'



@NgModule({
  declarations: [CovidReport1Component],
  imports: [
    CommonModule,
    CovidReoprt1RoutingModule
  ]
})
export class CovidReport1Module { }
