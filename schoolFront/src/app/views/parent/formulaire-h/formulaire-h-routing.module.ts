import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireHComponent } from './formulaire-h.component';

const routes: Routes = [
  {path:'formulaire-h',component:FormulaireHComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaireHRoutingModule { }
