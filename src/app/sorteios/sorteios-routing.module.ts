import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorteiosComponent } from './sorteios/sorteios.component';

const routes: Routes = [
  { path: '', component: SorteiosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorteiosRoutingModule { }
