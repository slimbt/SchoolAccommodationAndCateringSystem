import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Form2RoutingModule } from './form2-routing.module';

import { FormsModule } from '@angular/forms';
import { Form2Component } from './form2.component';



@NgModule({
  declarations: [ Form2Component],
  imports: [
    CommonModule,
    Form2RoutingModule,
    FormsModule, 
  ],
  exports:[Form2Component]
})
export class Form2Module { }
