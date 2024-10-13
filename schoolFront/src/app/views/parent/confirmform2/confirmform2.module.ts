import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Confirmform2RoutingModule } from './confirmform2-routing.module';
import { Confirmform2Component } from './confirmform2.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';


@NgModule({
  declarations: [
    Confirmform2Component
  ],
  imports: [
    CommonModule,
    Confirmform2RoutingModule,
    FormsModule, 
    ButtonModule,
    DialogModule,
    AutoCompleteModule
  ],
  exports:[Confirmform2Component]
})
export class Confirmform2Module { }
