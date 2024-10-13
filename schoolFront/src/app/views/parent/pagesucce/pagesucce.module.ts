import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesucceRoutingModule } from './pagesucce-routing.module';
import { PagesucceComponent } from './pagesucce.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserModule } from '@angular/platform-browser';

import { RatingModule } from 'primeng/rating';
import { FeedbckModule } from '../feedbck/feedbck.module';
@NgModule({
  declarations: [
    PagesucceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    PagesucceRoutingModule,
    FormsModule,
    RatingModule, 
    ButtonModule,
    DialogModule,
    FeedbckModule
  ],
  exports:[PagesucceComponent]
})
export class PagesucceModule { }
