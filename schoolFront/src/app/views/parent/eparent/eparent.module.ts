import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EparentRoutingModule } from './eparent-routing.module';
import { EparentComponent } from './eparent.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { MesdemandesModule } from '../mesdemandes/mesdemandes.module';
import { HistoriqueModule } from '../historique/historique.module';
import { NotifsModule } from 'app/notifs/notifs.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
    declarations: [
        EparentComponent
    ],
    exports: [
        EparentComponent
    ],
    imports: [
        CommonModule,
        EparentRoutingModule,
      
        FormsModule,
       
        ButtonModule,
        StepsModule,
        MesdemandesModule,
        HistoriqueModule,
        NotifsModule,
        MatSnackBarModule,
        BadgeModule,
        OverlayPanelModule

       
    ]
})
export class EparentModule { }
