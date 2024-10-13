import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Chart1RoutingModule } from './chart1-routing.module';
import { Chart1Component } from './chart1.component';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [
    Chart1Component
  ],
  imports: [
    CommonModule,
    Chart1RoutingModule,
    ChartModule
  ],
  exports:[Chart1Component]
})
export class Chart1Module { }
