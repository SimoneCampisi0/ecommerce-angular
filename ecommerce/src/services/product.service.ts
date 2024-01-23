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
                        sortingFilter: string): Observable<any>{
    let url

    if(sortingFilter != '') {
      url = 'http://localhost:8080/orders/products?pageNumber='+pageNumber+'&pageSize='+pageSize+'&sortBy='+sortBy+'&sortingOrder='+sortingOrder+'&sortingFilter='+sortingFilter
      console.log("url: "+url)
    } else {
      url = 'http://localhost:8080/orders/products?pageNumber='+pageNumber+'&pageSize='+pageSize+'&sortBy='+sortBy+'&sortingOrder='+sortingOrder
      console.log("url: "+url)

    }

    return this.http.get<any>(url)
  }

  getProducts() {
    return this.http.get<ProductDTO[]>('http://localhost:8080/orders/products/lista-prodotti')
    // return this.http.get<ProductDTO[]>('https://spring-cloud-gateway-production-ed97.up.railway.app/orders/products/lista-prodotti')
  }

  getProductById(idProduct: number) {
    return this.http.get<ProductDTO>('http://localhost:8080/orders/products/leggi-prodotto?idProdotto='+idProduct)
  }
}
