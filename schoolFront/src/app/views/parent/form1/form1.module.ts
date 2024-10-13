import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form1RoutingModule } from './form1-routing.module';
import { Form1Component } from './form1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [Form1Component],
  imports: [
    CommonModule,
    Form1RoutingModule,
    FormsModule, 
    
  
  ],
  exports: [Form1Component]
})
export class Form1Module { }
