import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: 'auth' ,
    redirectTo: 'auth/register',
    pathMatch: 'full'
  },
  {   path: 'auth',
      children: [
          {
              path: 'register',
              component: RegisterComponent,
              data: { title : 'Register' }
          },
          {
              path: 'sign-in',
              component: SignInComponent,
              data: { title: 'Sign In'}
          }
      ]
  }
  // ,
  // { path: '' , component: HeaderComponent, outlet: 'header'},
  // { path: '' , component: SidebarComponent, outlet: 'sidebar'},
  // { path: '' , component: FooterComponent, outlet: 'footer'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
