import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { CommonFormComponent } from './component/common-form/common-form.component';
import { CommonButtonComponent } from './component/common-button/common-button.component';
import { CommonImageComponent } from './component/common-image/common-image.component';



@NgModule({
  declarations: [CommonFormComponent, CommonButtonComponent, CommonImageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule
  ],
  exports: [CommonFormComponent, CommonButtonComponent, CommonImageComponent]
})
export class SharedModule { }
