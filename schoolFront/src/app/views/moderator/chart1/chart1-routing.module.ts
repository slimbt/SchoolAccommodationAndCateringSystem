import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart1Component } from './chart1.component';

const routes: Routes = [
  {path:'chart',component:Chart1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Chart1RoutingModule { }
