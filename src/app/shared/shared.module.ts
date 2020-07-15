import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { RouterModule } from '@angular/router';
import { FormValidatorModule } from './form-validator/form-validator.module';



@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent,
    FormValidatorModule
  ]
})
export class SharedModule { }
