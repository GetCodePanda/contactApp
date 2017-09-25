import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'auth' ,
    redirectTo: 'auth/home',
    pathMatch: 'full'
  },
  {   path: 'auth' ,
      children: [
          {
            path: 'home',
            data: { title : 'Home' }
          },
          {
              path: 'register',
              data: { title : 'Register' }
          },
          {
              path: 'sign-in',
              data: { title: 'Sign In'}
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
