import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {CreateOrderRequest} from "../dtos/CreateOrderRequest";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private isCartOpenSubject = new BehaviorSubject(false);
  isCartOpen = this.isCartOpenSubject.asObservable();

  private isChangesOnCartSubject = new BehaviorSubject(false);
  isChangesOnCart = this.isChangesOnCartSubject.asObservable();

  // Ritorna isCartOpenSubject come Observable, in modo da poter essere sottoscritto nei vari componenti
  getIsCartOpen(): Observable<boolean> {
    return this.isCartOpen;
  }
  // Si imposta al subject il nuovo stato della variabile booleana
  setIsCartOpen(isCartOpen: boolean) {
    this.isCartOpenSubject.next(isCartOpen);
  }

  checkChangesOnChart() {
    return this.isChangesOnCart;
  }

  notifyChangesOnCart(changes: boolean) {
    this.isChangesOnCartSubject.next(changes);
  }

}
