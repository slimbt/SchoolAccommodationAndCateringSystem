import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePaginationRestauRoutingModule } from './table-pagination-restau-routing.module';
import { TablePaginationRestauComponent } from './table-pagination-restau.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    TablePaginationRestauComponent
  ],
  imports: [
    CommonModule,
    TablePaginationRestauRoutingModule,
    FormsModule ,
    BrowserModule,
     MatTableModule, 
     MatPaginatorModule,
     MatIconModule,
     ButtonModule ,
     DialogModule
  ],
  exports:[TablePaginationRestauComponent]
})
export class TablePaginationRestauModule { }
