import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CreateOrderRequest} from "../dtos/CreateOrderRequest";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private isCartOpenSubject = new BehaviorSubject(false);
  isCartOpen = this.isCartOpenSubject.asObservable();

  private orderInMemory!: CreateOrderRequest
  private orderInMemorySubject = new BehaviorSubject(this.orderInMemory)
  orderInMemoryObservable = this.orderInMemorySubject.asObservable();

  // Ritorna isCartOpenSubject come Observable, in modo da poter essere sottoscritto nei vari componenti
  getIsCartOpen(): Observable<boolean> {
    return this.isCartOpen;
  }
  // Si imposta al subject il nuovo stato della variabile booleana
  setIsCartOpen(isCartOpen: boolean) {
    this.isCartOpenSubject.next(isCartOpen);
  }


  // Get che rilascia un Observable. Una volta sottoscritto, fornisce le informazioni aggiornate sull'ordine corrente.
  // TODO: Qui deve prelevare il valore dal localStorage, se presente
  getOrderInMemory(): Observable<CreateOrderRequest> {
    return this.orderInMemoryObservable;
  }

  //TODO: Qui, quando setta il valore, lo deve salvare nel localStorage
  setOrderInMemory(orderRequest: CreateOrderRequest) {
    console.log("setOrderInMemory: ", orderRequest)
    this.orderInMemorySubject.next(orderRequest);
  }
}
