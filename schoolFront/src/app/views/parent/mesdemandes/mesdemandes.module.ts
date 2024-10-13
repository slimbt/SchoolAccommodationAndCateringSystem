import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesdemandesRoutingModule } from './mesdemandes-routing.module';
import { MesdemandesComponent } from './mesdemandes.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToggleButtonModule } from 'primeng/togglebutton'; // Importez le module ToggleButtonModule
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MesdemandesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    BrowserAnimationsModule,
    MesdemandesRoutingModule,
    DataViewModule ,
    DropdownModule,
    ButtonModule,
    FormsModule ,
    ToggleButtonModule 
   
  ],
  exports:[MesdemandesComponent]
})
export class MesdemandesModule { }
