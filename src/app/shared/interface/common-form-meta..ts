import { ValidatorFn } from "@angular/forms";

export interface CommonFormMeta {
    type:string,
    name:string,
    label:string,
    placeholder:string,
    validators:ValidatorFn[]
 }
