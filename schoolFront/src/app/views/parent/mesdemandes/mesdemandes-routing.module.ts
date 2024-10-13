import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesdemandesComponent } from './mesdemandes.component';

const routes: Routes = [
  {path:'demande',component:MesdemandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesdemandesRoutingModule { }
