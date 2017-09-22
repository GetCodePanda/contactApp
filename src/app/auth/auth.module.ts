import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Routing Module ...
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    RegisterComponent,
    SignInComponent
  ]
})

export class AuthModule { }
