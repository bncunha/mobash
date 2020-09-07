import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssentialsModule } from 'src/app/essentials.module';
import { PropriedadesSkuRoutingModule } from './propriedades-sku-routing.module';
import { ListaPropriedadesSkuComponent } from './lista-propriedades-sku/lista-propriedades-sku.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormularioPropriedadesSkuComponent } from './formulario-propriedades-sku/formulario-propriedades-sku.component';
import { OpcoesCaracteristicasModule } from '../opcoes-caracteristicas/opcoes-caracteristicas.module';



@NgModule({
  declarations: [ListaPropriedadesSkuComponent, FormularioPropriedadesSkuComponent],
  imports: [
    EssentialsModule,
    PropriedadesSkuRoutingModule,
    OpcoesCaracteristicasModule
  ]
})
export class PropriedadesSkuModule { }
