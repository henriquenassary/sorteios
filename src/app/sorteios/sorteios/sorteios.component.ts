import { SorteiosService } from './../services/sorteios.service';
import { Sorteio } from './../model/sorteio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteios',
  templateUrl: './sorteios.component.html',
  styleUrls: ['./sorteios.component.scss']
})
export class SorteiosComponent implements OnInit {

  sorteios: Sorteio[] = [];
  displayedColumns = ['nome', 'numeroSorteio', 'situacao'];

  constructor(private sorteiosService: SorteiosService) {
  // this.sorteiosService = new SorteiosService();

  }

  ngOnInit(): void {
    this.sorteios = this.sorteiosService.list();
  }

}
