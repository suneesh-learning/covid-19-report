import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import {CovidReport1Module} from './covid-report1/covid-report1.module';
import {CovidReport2Module} from './covid-report2/covid-report2.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component'



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CovidReport1Module,
    CovidReport2Module
  ],
  exports: [HeaderComponent],
})
export class HomeModule { }
