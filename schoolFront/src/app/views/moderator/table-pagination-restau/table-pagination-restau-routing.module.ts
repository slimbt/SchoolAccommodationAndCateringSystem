import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePaginationRestauComponent } from './table-pagination-restau.component';

const routes: Routes = [
  {path:'res',component:TablePaginationRestauComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePaginationRestauRoutingModule { }
