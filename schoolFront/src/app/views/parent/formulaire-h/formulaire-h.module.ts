import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireHRoutingModule } from './formulaire-h-routing.module';
import { FormulaireHComponent } from './formulaire-h.component';


@NgModule({
  declarations: [
    FormulaireHComponent
  ],
  imports: [
    CommonModule,
    FormulaireHRoutingModule
  ],
  exports:[FormulaireHComponent]
})
export class FormulaireHModule { }
