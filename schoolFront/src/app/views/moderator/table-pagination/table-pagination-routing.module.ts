import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablePaginationComponent } from './table-pagination.component';

const routes: Routes = [
  {path:'heb',component:TablePaginationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablePaginationRoutingModule { }
