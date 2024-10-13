import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifsComponent } from './notifs.component';



@NgModule({
  declarations: [NotifsComponent],
  imports: [
    CommonModule
  ],
  exports:[NotifsComponent]
})
export class NotifsModule { }
