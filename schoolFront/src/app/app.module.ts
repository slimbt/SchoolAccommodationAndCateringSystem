import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout/parent-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout/front-layout.component';
import { ModeratorLayoutComponent } from './layouts/moderator-layout/moderator-layout/moderator-layout.component';
import { AboutModule } from './views/parent/about/about.module';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ServicesModule } from './views/parent/services/services.module';
import { PortfolioModule } from './views/parent/portfolio/portfolio.module';
import { PricingModule } from './views/parent/pricing/pricing.module';
import { SubscribeModule } from './views/parent/subscribe/subscribe.module';
import { VideoModule } from './views/parent/video/video.module';
import { ContactModule } from './views/parent/contact/contact.module';
import { FooterPComponent } from './footer-p/footer-p.component';
import { LoginPModule } from './views/parent/login-p/login-p.module';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { EparentModule } from './views/parent/eparent/eparent.module';
import { FormulaireHModule } from './views/parent/formulaire-h/formulaire-h.module';
import { FormulaireRModule } from './views/parent/formulaire-r/formulaire-r.module';
import { ReclamationModule } from './views/parent/reclamation/reclamation.module';
import { AjoutEnfantModule } from './views/parent/ajout-enfant/ajout-enfant.module';
import { ListEnfantModule } from './views/parent/list-enfant/list-enfant.module';

import { MenuModComponent } from './views/moderator/menu-mod/menu-mod.component';
import { TablePaginationModule } from './views/moderator/table-pagination/table-pagination.module';

import { Form1Module } from './views/parent/form1/form1.module';

import { Confirmform1Module } from './views/parent/confirmform1/confirmform1.module';

import { PagesucceModule } from './views/parent/pagesucce/pagesucce.module';
import { FeedbckModule } from './views/parent/feedbck/feedbck.module';
import { Form2Module } from './views/parent/form2/form2.module';
import { Confirmform2Module } from './views/parent/confirmform2/confirmform2.module';
import { TablePaginationRestauModule } from './views/moderator/table-pagination-restau/table-pagination-restau.module';
import { TablePaginationRecModule } from './views/moderator/table-pagination-rec/table-pagination-rec.module';
import { Chart1Module } from './views/moderator/chart1/chart1.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalInfoModule } from './views/parent/modal-info/modal-info.module';
import { MesdemandesModule } from './views/parent/mesdemandes/mesdemandes.module';
import { HistoriqueModule } from './views/parent/historique/historique.module';
import { NotifsComponent } from './notifs/notifs.component';
import { NotifsModule } from './notifs/notifs.module';

import { DemandeService } from './_services/demande.service';
import { WebsocketService } from './_services/web-socket.service';








@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        ParentLayoutComponent,
        FrontLayoutComponent,
        ModeratorLayoutComponent,
        MainBannerComponent,
        FooterPComponent,
        HeaderComponent,
        RegisterComponent,
        BoardModeratorComponent,
        BoardUserComponent,
        LoginComponent,
        HomeComponent,
        MenuModComponent,
       
        
      
       
  
        
       
        
        
    ],
    providers: [httpInterceptorProviders,WebsocketService,DemandeService],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AboutModule,
        ServicesModule,
        PortfolioModule,
       PricingModule,
        SubscribeModule,
        VideoModule,
        ContactModule,
        LoginPModule,
        EparentModule,
        FormulaireHModule,
        FormulaireRModule,
        ReclamationModule,
        AjoutEnfantModule,
        ListEnfantModule,
        TablePaginationModule,
        Form1Module,
        Confirmform1Module,
        PagesucceModule,
        FeedbckModule,
        Form2Module,
        Confirmform2Module,
        TablePaginationRestauModule,
        TablePaginationRecModule,
        Chart1Module,
        MatSnackBarModule,
        ModalInfoModule,
        MesdemandesModule,
        HistoriqueModule,
        NotifsModule
        
    ]
})
export class AppModule { }
