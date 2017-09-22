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
            // component: Autn,
            data: { title : 'Home' }
          },
          {
              path: 'register',
              // component: AddContactComponent,
              data: { title : 'Register' }
          },
          {
              path: 'sign-in',
              // component: ContactsComponent,
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
