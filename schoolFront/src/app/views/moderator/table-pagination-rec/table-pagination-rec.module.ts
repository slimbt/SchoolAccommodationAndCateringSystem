import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePaginationRecRoutingModule } from './table-pagination-rec-routing.module';
import { TablePaginationRecComponent } from './table-pagination-rec.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    TablePaginationRecComponent
  ],
  imports: [
    CommonModule,
    TablePaginationRecRoutingModule,
    FormsModule ,
    BrowserModule,
     MatTableModule, 
     MatPaginatorModule,
     MatIconModule,
     ButtonModule ,
     DialogModule
  ],
  exports:[TablePaginationRecComponent]
})
export class TablePaginationRecModule { }
