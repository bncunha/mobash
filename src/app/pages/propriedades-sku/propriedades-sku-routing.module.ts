import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaPropriedadesSkuComponent } from './lista-propriedades-sku/lista-propriedades-sku.component';
import { FormularioPropriedadesSkuComponent } from './formulario-propriedades-sku/formulario-propriedades-sku.component';

const routes: Routes = [
  { path: '', component: ListaPropriedadesSkuComponent},
  { path: 'add', component: FormularioPropriedadesSkuComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PropriedadesSkuRoutingModule { }
