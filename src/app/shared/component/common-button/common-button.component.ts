import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonButtonColor } from '../../enum/common-button-color';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrl: './common-button.component.scss'
})
export class CommonButtonComponent {

  @Input("label")
  public label:string = "Submit";

  @Input("disabled")
  public disabled:boolean = false;

  @Input("type")
  public type:string = "button";

  @Input("color")
  public color:CommonButtonColor = CommonButtonColor.ORANGE_COLOR;

  @Output("submit")
  public submit:EventEmitter<string> = new EventEmitter<string>;

  private submitValue:string = "submit";

  public click():void{
    this.submit.emit(this.submitValue);
  }

  public getCssColorClass():string{
    if(this.color == CommonButtonColor.ORANGE_COLOR)
      return "common-button-orange";
    else if(this.color == CommonButtonColor.GREEN_COLOR)
      return "common-button-green";

    return "";
  }
}
