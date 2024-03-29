import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // BehaviorSubject è un tipo speciale di Observable che possiede un valore corrente. Permette quindi di creare una variabile che può essere osservata.
  // Ogni volta che il suo valore cambia, tutti i componenti che si sono sottoscritti a questa variabile riceveranno automaticamente l’aggiornamento.
  _selectedProduct = new BehaviorSubject<boolean>(false)

  // Essendo un Observable, quando si vuole ricevere il valore aggiornato di selectedProduct, basta eseguire la subscribe su esso
  selectedProduct = this._selectedProduct.asObservable()
  constructor() { }

  // Per modificare il valore del selectedProduct, basta richiamare questo metodo.
  changeSelectedProduct(value: boolean) {
    this._selectedProduct.next(value);
  }
}
