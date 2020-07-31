import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { RouterModule } from '@angular/router';
import { FormValidatorModule } from './form-validator/form-validator.module';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { AlertPopupModule } from './alert-popup/alert-popup.module';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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
