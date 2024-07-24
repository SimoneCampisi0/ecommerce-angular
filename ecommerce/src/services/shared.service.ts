import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // BehaviorSubject è un tipo speciale di Observable che possiede un valore corrente. Permette quindi di creare una variabile che può essere osservata.
  // Ogni volta che il suo valore cambia, tutti i componenti che si sono sottoscritti a questa variabile riceveranno automaticamente l’aggiornamento.
  _disableHome = new BehaviorSubject<boolean>(false)

  // Essendo un Observable, quando si vuole ricevere il valore aggiornato di selectedProduct, basta eseguire la subscribe su esso
  disableHome = this._disableHome.asObservable()
  constructor() { }

  // Per modificare il valore del selectedProduct, basta richiamare questo metodo.
  setDisableHome(value: boolean) {
    this._disableHome.next(value);
  }
}
