import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEnfantComponent } from './list-enfant.component';

const routes: Routes = [
  {path:'list-e',component:ListEnfantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEnfantRoutingModule { }
