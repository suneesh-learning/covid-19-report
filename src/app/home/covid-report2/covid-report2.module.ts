import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidReport2Component } from './covid-report2.component'
import {CovidReoprt2RoutingModule}from './covid-report2.routing.module'
import {SharedModule} from '../shared/shared.module'


@NgModule({
  declarations: [CovidReport2Component],
  imports: [
    CommonModule,
    CovidReoprt2RoutingModule,
    SharedModule
  ]
})
export class CovidReport2Module { }
