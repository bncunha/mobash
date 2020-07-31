import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPopupComponent } from './alert-popup.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AlertPopupComponent
  ],
  imports: [
    CommonModule,
    SweetAlert2Module
  ], exports: [
    AlertPopupComponent
  ]
})
export class AlertPopupModule { }
