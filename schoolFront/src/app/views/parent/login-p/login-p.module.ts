import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPRoutingModule } from './login-p-routing.module';
import { LoginPComponent } from './login-p.component';


@NgModule({
  declarations: [
    LoginPComponent
  ],
  imports: [
    CommonModule,
    LoginPRoutingModule
  ],
  exports: [
    LoginPComponent
  ]
})
export class LoginPModule { }
