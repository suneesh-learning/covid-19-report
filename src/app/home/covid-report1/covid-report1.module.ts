import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidReport1Component } from './covid-report1.component';
import{CovidReoprt1RoutingModule} from './covid-report1.routing.module'
import {SharedModule} from '../shared/shared.module'



@NgModule({
  declarations: [CovidReport1Component],
  imports: [
    CommonModule,
    CovidReoprt1RoutingModule,
    SharedModule
  ]
})
export class CovidReport1Module { }
