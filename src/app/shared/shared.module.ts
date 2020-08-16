import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { RouterModule } from '@angular/router';
import { FormValidatorModule } from './form-validator/form-validator.module';
import { AlertPopupModule } from './alert-popup/alert-popup.module';
import { LoadingComponent } from './loading/loading.component';
import { ColunaEdicaoComponent } from './tabela/coluna-edicao/coluna-edicao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent,
    LoadingComponent,
    ColunaEdicaoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidatorModule
  ],
  exports: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent,
    FormValidatorModule,
    AlertPopupModule,
    LoadingComponent
  ]
})
export class SharedModule { }
