import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPComponent } from './login-p.component';

const routes: Routes = [
  {path:'login',component:LoginPComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPRoutingModule { }
