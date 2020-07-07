import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { EssentialsModule } from 'src/app/essentials.module';



@NgModule({
  declarations: [SidebarComponent],
  imports: [
    EssentialsModule
  ], exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
