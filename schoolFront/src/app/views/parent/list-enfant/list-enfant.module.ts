import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEnfantRoutingModule } from './list-enfant-routing.module';
import { ListEnfantComponent } from './list-enfant.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ListEnfantComponent
  ],
  imports: [
    CommonModule,
    ListEnfantRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
  ],
  exports: [
    ListEnfantComponent
  ]
})
export class ListEnfantModule { }
