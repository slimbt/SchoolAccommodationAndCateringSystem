import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Confirmform1RoutingModule } from './confirmform1-routing.module';
import { FormsModule } from '@angular/forms';
import { Confirmform1Component } from './confirmform1.component';
import { ButtonModule } from 'primeng/button'; 
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [Confirmform1Component],
  imports: [
    CommonModule,
    Confirmform1RoutingModule,
    FormsModule, 
    ButtonModule,
    DialogModule,
    AutoCompleteModule
    
  ],
  exports:[Confirmform1Component]
})
export class Confirmform1Module { }
