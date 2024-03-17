import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import {DetailProductDTO} from "../dtos/DetailProductDTO";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: DetailProductDTO[] = [];

  private cartSubject = new BehaviorSubject(false);
  currentCart = this.cartSubject.asObservable();

  products$: Observable<DetailProductDTO[]> = of(this.products);

  addProduct(productToAdd: DetailProductDTO) {
    this.products.push(productToAdd);
    this.products$ = of(this.products);
    this.saveAllCartOnLocalStorage();
  }

  saveAllCartOnLocalStorage() {
    localStorage.setItem('cartState', JSON.stringify(this.products))
  }

  getProducts() {
    if(this.products.length === 0) {
      let cartState: DetailProductDTO[] = JSON.parse(localStorage.getItem('cartState')!);
      if(cartState) {
        cartState.forEach(el => this.addProduct(el))
      }
    }
    return this.products$
  }

  getCartOpening(): Observable<boolean> {
    return this.currentCart;
  }

  setCartOpening(cartOpening: boolean) {
    this.cartSubject.next(cartOpening);
  }


}
