import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ParentLayoutComponent } from './layouts/parent-layout/parent-layout/parent-layout.component';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout/front-layout.component';
import { ModeratorLayoutComponent } from './layouts/moderator-layout/moderator-layout/moderator-layout.component';
import { LoginPComponent } from './views/parent/login-p/login-p.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

const routes: Routes =[
  { path: 'login',  component: LoginComponent },
 {path:'register',component:RegisterComponent},
 { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'adminn', component: BoardAdminComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

  {path:'parent' ,component:ParentLayoutComponent,
children: [{
  path:'',
  loadChildren:()=> import('./layouts/parent-layout/parent-layout/parent-layout.module').then(m => m.ParentLayoutModule)
},


]},
{
  path: '', 
  component: FrontLayoutComponent,
  pathMatch: 'full' ,
  children: [{
    path:'',
    loadChildren:()=> import('./layouts/front-layout/front-layout/front-layout.module').then(m => m.FrontLayoutModule)
},
]},


{
  path: 'moderator', 
  component: ModeratorLayoutComponent,
  
}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
