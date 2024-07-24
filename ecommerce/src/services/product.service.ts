import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ViewProductDTO} from "../dtos/ViewProductDTO";
import {SortingOrder} from "../dtos/enums/sorting.order";
import {DetailProductDTO} from "../dtos/DetailProductDTO";
import {Page} from "../dtos/abstract/Page";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUpdated = new Subject<Page<ViewProductDTO>>();
  private sortingFilter!: string;
  private pageNumber!: number;
  private pageSize!: number;
  private sortBy!: string;
  private sortingOrder!: SortingOrder;

  constructor(private http: HttpClient) {
  }

  // Questo metodo esegue la query nel BE e associa i risultati al Subject productsUpdated, che aggiorna automaticamente i risultati in tutti gli ascoltatori.
  // Gli ascoltatori, o listeners, si sottoscrivono al metodo productsUpdatedListener()
  doQueryPaginatedList(pageNumber?: number,
                       pageSize?: number,
                       sortBy?: string,
                       sortingOrder?: SortingOrder): void {

    if (pageNumber != null || pageNumber != undefined) {
      this.pageNumber = pageNumber;
    }

    if (!this.pageSize || pageSize != undefined) {
      if (pageSize) {
        this.pageSize = pageSize;
      }
    }

    if (!this.sortBy || sortBy != undefined) {
      if (sortBy) {
        this.sortBy = sortBy;
      }
    }

    if (!this.sortingOrder || sortingOrder != undefined) {
      if (sortingOrder) {
        this.sortingOrder = sortingOrder;
      } else {
        this.sortingOrder = SortingOrder.ASC;
      }
    }

    let url;

    if (this.sortingFilter != '') {
      url = 'http://localhost:8080/orders/products?pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize + '&sortBy=' + this.sortBy + '&sortingOrder=' + this.sortingOrder + '&sortingFilter=' + this.sortingFilter
    } else {
      url = 'http://localhost:8080/orders/products?pageNumber=' + this.pageNumber + '&pageSize=' + this.pageSize + '&sortBy=' + this.sortBy + '&sortingOrder=' + this.sortingOrder
    }

    this.http.get<any>(url)
      .subscribe((response) => {
        this.productsUpdated.next(response) // propaga la lista aggiornata in productsUpdated
      })
  }

  productsUpdatedListener(): Observable<Page<ViewProductDTO>> { // Observable a cui si sottoscriveranno tutti gli ascoltatori dei prodotti
    return this.productsUpdated.asObservable();
  }

  getProducts() {
    return this.http.get<ViewProductDTO[]>('http://localhost:8080/orders/products/lista-prodotti')
    // return this.http.get<ProductDTO[]>('https://spring-cloud-gateway-production-ed97.up.railway.app/orders/products/lista-prodotti')
  }

  getProductById(idProduct: number) {
    return this.http.get<DetailProductDTO>('http://localhost:8080/orders/products/leggi-prodotto?idProdotto=' + idProduct)
  }

  setSortingFilter(value: string) {
    this.sortingFilter = value;
  }
}
