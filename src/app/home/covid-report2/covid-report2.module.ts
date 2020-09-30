import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidReport2Component } from './covid-report2.component'
import {CovidReoprt2RoutingModule}from './covid-report2.routing.module'



@NgModule({
  declarations: [CovidReport2Component],
  imports: [
    CommonModule,
    CovidReoprt2RoutingModule
  ]
})
export class CovidReport2Module { }
