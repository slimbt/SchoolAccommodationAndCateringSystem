import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
  GalleriaModule
  ],
  exports: [
    PortfolioComponent
    
     
    ]
})
export class PortfolioModule { }
