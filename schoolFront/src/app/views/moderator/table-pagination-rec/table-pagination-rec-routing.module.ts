import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePaginationRecComponent } from './table-pagination-rec.component';

const routes: Routes = [
  {path:'rec',component:TablePaginationRecComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePaginationRecRoutingModule { }
