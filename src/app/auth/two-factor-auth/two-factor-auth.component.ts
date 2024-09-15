import { Component } from '@angular/core';

@Component({
  selector: 'app-two-factor-auth',
  templateUrl: './two-factor-auth.component.html',
  styleUrl: './two-factor-auth.component.scss'
})
export class TwoFactorAuthComponent {

  public title:string = "Two-Factor Authentication";

  public text:string = "Enter ther code displayed in your authenticator app."

  public value:any = "";

  public inputLength: number = 6;

  public buttonLabel: string = "Send";

  buttonDisabled():boolean{
    return this.value.length != this.inputLength;
  }

  submit(event:any):void{
    console.log("OTP value: ",this.value);
  }
}
