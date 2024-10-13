import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form2Component } from './form2.component';

const routes: Routes = [
  {path:'form2',component:Form2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Form2RoutingModule { }
