import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthTextComponent } from './utils/auth-text/auth-text.component';
import { AuthTitleComponent } from './utils/auth-title/auth-title.component';

const routes: Routes = [
  {
    path: "", component: SignInComponent
  }
];

@NgModule({
  declarations: [
    SignInComponent,
    AuthTitleComponent,
    AuthTextComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
