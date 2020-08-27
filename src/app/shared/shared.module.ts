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
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    ButtonComponent,
    LoadingComponent,
    ColunaEdicaoComponent,
    CustomColumDirective,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormValidatorModule,
    MatDialogModule
  ],
  exports: [
    CardComponent,
    TabelaComponent,
    ButtonComponent,
    FormValidatorModule,
    AlertPopupModule,
    LoadingComponent,
    CustomColumDirective,
    DialogComponent
  ]
})
export class SharedModule { }
