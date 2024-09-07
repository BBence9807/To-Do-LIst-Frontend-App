import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent{
  
  public scr:string = "image/illustration-purple.png";

  public alt:string = "Sign In Page To Do List Illustration";

  public title:string = "Sign In";
  
}
