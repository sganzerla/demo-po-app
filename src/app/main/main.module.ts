import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

import { PoToolbarModule, PoMenuModule } from '@portinari/portinari-ui';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    HomeRoutingModule,
    HomeModule
  ]
})
export class MainModule { }
