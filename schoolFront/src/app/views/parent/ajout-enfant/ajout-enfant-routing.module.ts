import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEnfantComponent } from './ajout-enfant.component';

const routes: Routes = [
  {path:'add-e', component: AjoutEnfantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutEnfantRoutingModule { }
