import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeratorLayoutRoutingModule } from './moderator-layout-routing.module';
import { TablePaginationComponent } from 'app/views/moderator/table-pagination/table-pagination.component';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModeratorLayoutRoutingModule,
    ChartModule 
   
  ]
})
export class ModeratorLayoutModule { }
