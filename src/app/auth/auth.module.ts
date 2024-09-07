import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthTitlComponent } from './utils/auth-titl/auth-titl.component';
import { AuthTitleComponent } from './utils/auth-title/auth-title.component';
import { AuthButtonComponent } from './utils/auth-button/auth-button.component';

const routes: Routes = [
  {
    path: "", component: SignInComponent
  }
];

@NgModule({
  declarations: [
    SignInComponent,
    AuthTitlComponent,
    AuthTitleComponent,
    AuthButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
