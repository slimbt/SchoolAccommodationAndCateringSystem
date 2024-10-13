import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services/services.component';
import { CarouselModule } from 'primeng/carousel';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    CarouselModule
  ],
  exports: [
  ServicesComponent
  
   
  ]
})
export class ServicesModule { }
