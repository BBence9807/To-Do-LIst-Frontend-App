import { Component, OnInit } from '@angular/core';
import { AuthPage } from '../interface/auth-page.';
import { NGXLogger } from 'ngx-logger';
import { CommonFormMeta } from '../../shared/interface/common-form-meta.';
import { CommonFormType } from '../../shared/enum/common-form-type';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit, AuthPage{
  
  public title:string = "Sign Up";

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
      },
      {
        label: "Password",
        name: "userPasswordRe",
        placeholder: "Enter your password again...",
        type: CommonFormType.AUTH_FORM_PASSWORD,
        validators: [Validators.required]
      }
    ]
  }
  
  submit(value: Map<string, string>): void {
    this.logger.info("Submit form: ",value);
  }

}
