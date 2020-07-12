import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TabelaComponent } from './tabela/tabela.component';
import { AddButtonComponent } from './add-button/add-button.component';



@NgModule({
  declarations: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TabelaComponent,
    AddButtonComponent
  ]
})
export class SharedModule { }
