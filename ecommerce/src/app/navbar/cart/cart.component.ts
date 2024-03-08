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
  showCartMenu: boolean = false;

  products$!: Observable<DetailProductDTO[]>;

  divColor: string = 'black';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products$ = this.cartService.getProducts();
  }

  showMenu() {
    this.showCartMenu = !this.showCartMenu;
    if(this.showCartMenu) {
      this.divColor = 'white';
    } else {
      this.divColor = 'black';
    }
    this.products$ = this.cartService.getProducts();
  }

}
