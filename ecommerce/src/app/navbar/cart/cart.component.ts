import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../services/cart.service";
import {DetailProductDTO} from "../../../dtos/DetailProductDTO";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  products$!: Observable<DetailProductDTO[]>;

  divColor: string = 'black';

  // showCartMenu: boolean = false;
  showCartMenu!: boolean;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products$ = this.cartService.getProducts();
    this.cartService.getCartOpening().subscribe(cartOpening => {
      this.showCartMenu = cartOpening;
      if(this.showCartMenu) {
        this.divColor = 'white';
      } else {
        this.divColor = 'black';
      }
    })
  }

  showMenu() {
    this.cartService.setCartOpening(!this.showCartMenu);
    this.products$ = this.cartService.getProducts();
  }

}
