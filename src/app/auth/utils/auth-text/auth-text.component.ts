import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-text',
  templateUrl: './auth-text.component.html',
  styleUrl: './auth-text.component.scss'
})
export class AuthTextComponent {

  constructor(private router:Router){}

  @Input("text")
  public text:string = ""

  @Input("link")
  public link:string = "";


  isLink():boolean{
    return this.link != "";
  }

  openLink():void{
    if(this.link != "")
      this.router.navigate([this.link]);
  }
}
