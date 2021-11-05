import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorteiosRoutingModule } from './sorteios-routing.module';
import { SorteiosComponent } from './sorteios/sorteios.component';


@NgModule({
  declarations: [
    SorteiosComponent
  ],
  imports: [
    CommonModule,
    SorteiosRoutingModule
  ]
})
export class SorteiosModule { }
