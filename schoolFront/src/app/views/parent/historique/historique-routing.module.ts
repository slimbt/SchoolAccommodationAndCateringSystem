import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriqueComponent } from './historique.component';

const routes: Routes = [
  {path:'historique',component:HistoriqueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoriqueRoutingModule { }
