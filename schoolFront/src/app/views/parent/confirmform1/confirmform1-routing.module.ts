import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Confirmform1Component } from './confirmform1.component';

const routes: Routes = [
  {path:'confirmform1',component:Confirmform1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Confirmform1RoutingModule { }
