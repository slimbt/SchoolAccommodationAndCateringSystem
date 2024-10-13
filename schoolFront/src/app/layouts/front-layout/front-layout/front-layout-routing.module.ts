
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from 'app/register/register.component';

import { AboutComponent } from 'app/views/parent/about/about/about.component';
import { ContactComponent } from 'app/views/parent/contact/contact/contact.component';
import { LoginPComponent } from 'app/views/parent/login-p/login-p.component';
import { PortfolioComponent } from 'app/views/parent/portfolio/portfolio/portfolio.component';
import { PricingComponent } from 'app/views/parent/pricing/pricing/pricing.component';
import { ServicesComponent } from 'app/views/parent/services/services/services.component';
import { SubscribeComponent } from 'app/views/parent/subscribe/subscribe/subscribe.component';
import { VideoComponent } from 'app/views/parent/video/video/video.component';


export const FrontLayoutRoutes: Routes = [
   
  { path: 'about',      component: AboutComponent },
  { path: 'contact',   component: ContactComponent },
  { path: 'portfolio',     component: PortfolioComponent },
  { path: 'services',     component: ServicesComponent },
  { path: 'subscribe',          component: SubscribeComponent },
  { path: 'video',           component: VideoComponent },
  { path: 'pricing',  component: PricingComponent },
 
];

