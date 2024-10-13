import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Confirmform2Component } from './confirmform2.component';

const routes: Routes = [
  {path:'confirmform2',component:Confirmform2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Confirmform2RoutingModule { }
