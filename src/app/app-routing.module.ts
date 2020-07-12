import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PropriedadesSkuModule } from './pages/propriedades-sku/propriedades-sku.module';

const routes: Routes = [
  {path: 'propriedades-sku', loadChildren: './pages/propriedades-sku/propriedades-sku.module#PropriedadesSkuModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
