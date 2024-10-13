import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EparentComponent } from './eparent.component';

const routes: Routes = [
  {path:'parent',component:EparentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EparentRoutingModule { }
