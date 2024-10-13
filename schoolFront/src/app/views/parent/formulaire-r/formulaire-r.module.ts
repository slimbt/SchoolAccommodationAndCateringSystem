import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaireRRoutingModule } from './formulaire-r-routing.module';
import { FormulaireRComponent } from './formulaire-r.component';


@NgModule({
  declarations: [
    FormulaireRComponent
  ],
  imports: [
    CommonModule,
    FormulaireRRoutingModule
  ],
  exports:[FormulaireRComponent]
})
export class FormulaireRModule { }
