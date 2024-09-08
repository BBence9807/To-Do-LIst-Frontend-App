import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';
import { CommonFormType } from '../../shared/enum/common-form-type';
import { CommonFormMeta } from '../../shared/interface/common-form-meta.';
import { AuthPage } from '../interface/auth-page.';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit, AuthPage{
  
  public title:string = "Sign In";

  public formFields:CommonFormMeta[] = [];

  constructor(private logger:NGXLogger){

  }
  
  ngOnInit(): void {
    this.initFormFields();
  }
  initFormFields(): void {
    this.formFields = [
      {
        label: "Email address",
        name: "userEmail",
        placeholder: "Enter your email...",
        type: CommonFormType.AUTH_FORM_TEXT,
        validators: [Validators.email, Validators.required]
      },
      {
        label: "Password",
        name: "userPassword",
        placeholder: "Enter your password...",
        type: CommonFormType.AUTH_FORM_PASSWORD,
        validators: [Validators.required]
      }
    ]
  }

  submit(value: Map<string,string>): void {
    this.logger.info("Submit form: ",value);
  }
  
}
