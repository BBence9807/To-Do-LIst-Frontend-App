import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private url:string = "/login"

  constructor(private router:Router){
    this.router.navigate([this.url]);
  } 

}
