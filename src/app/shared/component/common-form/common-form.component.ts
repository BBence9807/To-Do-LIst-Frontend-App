import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';
import { CommonFormMeta } from '../../interface/common-form-meta.';
import { CommonButtonColor } from '../../enum/common-button-color';

@Component({
  selector: 'app-common-form',
  templateUrl: './common-form.component.html',
  styleUrl: './common-form.component.scss'
})
export class CommonFormComponent implements OnInit{
  
  @Input("fields")
  public fields:CommonFormMeta[] = [];

  @Input("buttonTitle")
  public buttonTitle:string = "Submit";

  @Output("submit")
  private submit:EventEmitter<Map<string,string>> = new EventEmitter<Map<string,string>>();
  
  public form!: FormGroup;

  public buttonType:string = "submit";

  public buttonColor:CommonButtonColor = CommonButtonColor.ORANGE_COLOR;

  ngOnInit(): void {
    this.initForm();
  }

  private initForm():void{
    let controls:any = {};

    for(let item of this.fields){
      controls[item.name] = new UntypedFormControl('',item.validators)
    }

    this.form = new FormGroup(controls);
  }


  public formIsInValid():boolean{
    return this.form.invalid;
  }
  
  public submitForm():void{
    this.submit.emit(this.createResult());
  }


  private createResult():Map<string,string>{
    let map: Map<string,string> = new Map<string,string>()

    for(let [key, value] of Object.entries(this.form.controls)){
      map.set(key,value.value)
    }

    return map; 
  }

}
