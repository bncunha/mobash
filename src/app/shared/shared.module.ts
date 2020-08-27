import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { RouterModule } from '@angular/router';
import { FormValidatorModule } from './form-validator/form-validator.module';
import { AlertPopupModule } from './alert-popup/alert-popup.module';
import { LoadingComponent } from './loading/loading.component';
import { ColunaEdicaoComponent } from './tabela/coluna-edicao/coluna-edicao.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { CustomColumDirective } from './tabela/custom-colum.directive';


@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    ButtonComponent,
    LoadingComponent,
    ColunaEdicaoComponent,
    CustomColumDirective,
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
    ButtonComponent,
    FormValidatorModule,
    AlertPopupModule,
    LoadingComponent,
    CustomColumDirective
  ]
})
export class SharedModule { }
