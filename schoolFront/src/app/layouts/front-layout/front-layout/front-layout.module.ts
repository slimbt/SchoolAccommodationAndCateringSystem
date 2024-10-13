import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FrontLayoutRoutes } from './front-layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutModule } from 'app/views/parent/about/about.module';
import { ServicesModule } from 'app/views/parent/services/services.module';
import { PortfolioModule } from 'app/views/parent/portfolio/portfolio.module';
import { ContactModule } from 'app/views/parent/contact/contact.module';
import { LoginPModule } from 'app/views/parent/login-p/login-p.module';
import { SubscribeModule } from 'app/views/parent/subscribe/subscribe.module';
import { VideoModule } from 'app/views/parent/video/video.module';
import { PricingModule } from 'app/views/parent/pricing/pricing.module';





@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(FrontLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    AboutModule,
    ServicesModule,
  PortfolioModule,
  ContactModule,
  LoginPModule,
  SubscribeModule,
  VideoModule,
  PricingModule
 
  ],

  declarations: [

  ]
})
export class FrontLayoutModule { }
