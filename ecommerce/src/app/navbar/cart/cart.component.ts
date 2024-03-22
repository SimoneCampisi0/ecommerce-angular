import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {CreateOrderRequest} from "../../../dtos/CreateOrderRequest";
import {CreateOrderForProductRequest} from "../../../dtos/CreateOrderForProductRequest";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

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

  ngOnInit() {
    this.cartService.getIsCartOpen().subscribe(
      (isCartOpening) => this.isCartOpen = isCartOpening
    )

    /* TODO:  Verificare il corretto funzionamento di questi Observable. Inoltre, aggiungere i metodi set per settare l'ordine.
       In particolare, dopo aver cliccato il pulsante "Aggiungi al carrello":
        -Se l'ordine è già esistente:
          -Se il prodotto aggiunto è dello stesso tipo di un di quelli già presenti nel carrello, allora si individua e si incrementa la quantità del valore quantità aggiunto.
          -Se il prodotto non è presente, lo si aggiunge semplicemente
        -Se l'ordine non esiste:
          -Si crea il macro-ordine da zero e si aggiunge semplicemente il prodotto come OrderForProduct.
     * */
    this.cartService.getOrderInMemory().subscribe(
      (orderInMemory) => {
        if(orderInMemory) {
          this.order = orderInMemory;
          if(orderInMemory.orderForProduct) {
            this.orderProducts = orderInMemory.orderForProduct
          }
        }
        localStorage.setItem('cartOrder', JSON.stringify(this.order))
      }
    )
  }

  //TODO: fixare questo
  showMenu() {
    if(this.isCartOpen) {
      if(localStorage.getItem('cartOrder')) {
        this.order = JSON.parse(localStorage.getItem('cartOrder')!)
        this.orderProducts = this.order.orderForProduct
      }
    }
    this.cartService.setIsCartOpen(!this.isCartOpen)
  }


}
