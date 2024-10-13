import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbckComponent } from './feedbck.component';

const routes: Routes = [
  {path:'feedbck',component:FeedbckComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbckRoutingModule { }
