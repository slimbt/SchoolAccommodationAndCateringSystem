import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbckRoutingModule } from './feedbck-routing.module';
import { FeedbckComponent } from './feedbck.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    FeedbckComponent
  ],
  imports: [
    CommonModule,
    FeedbckRoutingModule,
    CarouselModule
  ],
  exports: [FeedbckComponent]
})
export class FeedbckModule { }
