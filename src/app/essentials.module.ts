import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';



@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class EssentialsModule { }
