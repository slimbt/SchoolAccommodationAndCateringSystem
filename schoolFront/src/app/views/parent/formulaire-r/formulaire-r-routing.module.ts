import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireRComponent } from './formulaire-r.component';

const routes: Routes = [
  {path:"formulaire-r",component:FormulaireRComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaireRRoutingModule { }
