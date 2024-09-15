import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component';
import { AuthTextComponent } from './utils/auth-text/auth-text.component';
import { AuthTitleComponent } from './utils/auth-title/auth-title.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "", redirectTo: "auth/login", pathMatch: 'full'
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        component: SignInComponent
      },
      {
        path: "twoFactor", 
        component: TwoFactorAuthComponent,
      },
      {
        path: "register", 
        component: SignUpComponent,
      }
    ] 
  }
];

@NgModule({
  declarations: [
    SignInComponent,
    AuthTitleComponent,
    AuthTextComponent,
    TwoFactorAuthComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    InputOtpModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
