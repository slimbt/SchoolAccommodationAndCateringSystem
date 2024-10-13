import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesucceComponent } from './pagesucce.component';

const routes: Routes = [
  {path:'pagesucce',component:PagesucceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesucceRoutingModule { }
