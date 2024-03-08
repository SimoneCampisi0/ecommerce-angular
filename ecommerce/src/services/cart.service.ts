import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {DetailProductDTO} from "../dtos/DetailProductDTO";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: DetailProductDTO[] = [];

  products$: Observable<DetailProductDTO[]> = of(this.products);

  addProduct(productToAdd: DetailProductDTO) {
    this.products.push(productToAdd);
    this.products$ = of(this.products);
  }
}
