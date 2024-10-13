import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjoutEnfantRoutingModule } from './ajout-enfant-routing.module';
import { AjoutEnfantComponent } from './ajout-enfant.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AjoutEnfantComponent
  ],
  imports: [
    CommonModule,
    AjoutEnfantRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    CalendarModule,
    RadioButtonModule
  ],
  exports: [
    AjoutEnfantComponent
  ]
})
export class AjoutEnfantModule { }
