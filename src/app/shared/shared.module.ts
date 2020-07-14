import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { RouterModule } from '@angular/router';



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
    AddButtonComponent
  ]
})
export class SharedModule { }
