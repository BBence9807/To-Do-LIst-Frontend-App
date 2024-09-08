import { Component } from '@angular/core';

@Component({
  selector: 'app-common-image',
  templateUrl: './common-image.component.html',
  styleUrl: './common-image.component.scss'
})
export class CommonImageComponent {

  public src:string = "image/illustration-purple.png";

  public alt:string = "Sign In Page To Do List Illustration";
}
