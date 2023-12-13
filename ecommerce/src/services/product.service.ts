import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductDTO} from "../dtos/ProductDTO";
import {SortingOrder} from "../dtos/enums/sorting.order";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}


  listaProdottiPaginata(pageNumber: number,
                        pageSize: number,
                        sortBy: string,
                        sortingOrder: SortingOrder,
                        sortingFilter: string): Observable<ProductDTO[]>{
    let url

    if(sortingFilter != '') {
      url = 'http://localhost:8080/orders/products?pageNumber='+pageNumber+'&pageSize='+pageSize+'&sortBy='+sortBy+'&sortingOrder='+sortingOrder+'&sortingFilter='+sortingFilter
    } else {
      url = 'http://localhost:8080/orders/products?pageNumber='+pageNumber+'&pageSize='+pageSize+'&sortBy='+sortBy+'&sortingOrder='+sortingOrder
    }

    return this.http.get<ProductDTO[]>(url)
  }

  listaProdotti() {
    return this.http.get<ProductDTO[]>('http://localhost:8080/orders/products/lista-prodotti')
  }
}
