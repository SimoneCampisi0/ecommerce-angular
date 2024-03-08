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
  showCartMenu: boolean = true;
  products$!: Observable<DetailProductDTO[]>;


  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.products$ = this.cartService.products$;
  }

  showMenu() {
    this.showCartMenu = !this.showCartMenu;
  }

}
