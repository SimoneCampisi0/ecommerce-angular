import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {CreateOrderRequest} from "../../../dtos/CreateOrderRequest";
import {CreateOrderForProductRequest} from "../../../dtos/CreateOrderForProductRequest";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  // Definisce se il carrello è aperto o meno
  isCartOpen!: boolean

  // Riceve il macro-ordine dal service.
  order!: CreateOrderRequest;
  orderProducts: CreateOrderForProductRequest[] = []
  constructor(protected cartService: CartService) {}

  ngOnInit() { // Lo stato del carrello ora si aggiorna soltanto con il localStorage. Utilizzare gli Observable
    this.cartService.getIsCartOpen().subscribe(
      (isCartOpening) => this.isCartOpen = isCartOpening
    )

    this.cartService.checkChangesOnChart().subscribe( // Ogni volta che avviene un cambiamento al carrello, viene aggiornato il suo stato dal localStorage
      () => {
        this.setCartOrderFromLocalStorage()
      }
    )
  }

  showMenu() {
    this.cartService.setIsCartOpen(!this.isCartOpen)
  }

  setCartOrderFromLocalStorage() {
    let orderInMemory = JSON.parse(localStorage.getItem('cartOrder')!)

    if (orderInMemory) {
      this.order = orderInMemory
      if (orderInMemory.orderForProduct) {
        this.orderProducts = orderInMemory.orderForProduct
      }
    }

  }

}
