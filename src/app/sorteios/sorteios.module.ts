import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorteiosRoutingModule } from './sorteios-routing.module';
import { SorteiosComponent } from './sorteios/sorteios.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    SorteiosComponent
  ],
  imports: [
    CommonModule,
    SorteiosRoutingModule,
    AppMaterialModule
  ]
})
export class SorteiosModule { }
