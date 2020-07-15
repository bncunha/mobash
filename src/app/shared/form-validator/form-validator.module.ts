import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidatorDirective } from './form-validator.directive';



@NgModule({
  declarations: [FormValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [FormValidatorDirective]
})
export class FormValidatorModule { }
