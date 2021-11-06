import { Sorteio } from './../model/sorteio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SorteiosService {

  constructor(private httpCliente: HttpClient) {}

  list(): Sorteio[] {
    return [
      { _id: '1', nome: 'Henrique', numeroSorteio: 45, situacao: 'PAGO'}
    ];
  }
}
