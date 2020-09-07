import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarOpcoesCaracteristicasComponent } from './listar-opcoes-caracteristicas/listar-opcoes-caracteristicas.component';
import { EssentialsModule } from 'src/app/essentials.module';



@NgModule({
  declarations: [ListarOpcoesCaracteristicasComponent],
  imports: [
    CommonModule,
    EssentialsModule
  ],
  exports: [ListarOpcoesCaracteristicasComponent]
})
export class OpcoesCaracteristicasModule { }
