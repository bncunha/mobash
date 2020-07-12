import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaPropriedadesSkuComponent } from './lista-propriedades-sku/lista-propriedades-sku.component';

const routes: Routes = [
  { path: '', component: ListaPropriedadesSkuComponent}
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
