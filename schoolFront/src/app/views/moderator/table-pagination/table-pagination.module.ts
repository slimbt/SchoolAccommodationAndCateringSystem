import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablePaginationRoutingModule } from './table-pagination-routing.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablePaginationComponent } from './table-pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { CustomFilterPipe } from 'app/pipes/custom-filter.pipe';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [ TablePaginationComponent,CustomFilterPipe],
  imports: [
    CommonModule,
    TablePaginationRoutingModule,
    FormsModule ,
    BrowserModule,
     MatTableModule, 
     MatPaginatorModule,
     MatIconModule,
     ButtonModule ,
     DialogModule
    
    
  ],
  exports:[TablePaginationComponent]
  
})
export class TablePaginationModule { }
