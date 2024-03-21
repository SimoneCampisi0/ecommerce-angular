import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {SharedService} from "../../../services/shared.service";
import {ProductService} from "../../../services/product.service";
import {DetailProductDTO} from "../../../dtos/DetailProductDTO";
import {CartService} from "../../../services/cart.service";
import {CreateOrderForProductRequest} from "../../../dtos/CreateOrderForProductRequest";
import {CreateOrderRequest} from "../../../dtos/CreateOrderRequest";
import {StatusOrder} from "../../../dtos/enums/statusorder.enum";

@Component({
  selector: 'app-product-module-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  id: number = 0

  opzioniQuantita!: number[]

  actualQuantita: number = 1

  //@ts-ignore
  productResponse: DetailProductDTO

  seller = "Mario Rossi" //TODO: collegare al seller effettivo.

  radioSelected!: string

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService,
              private productService: ProductService,
              private cartService: CartService) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = Number(params['id']);
        this.productService.getProductById(this.id).subscribe(
          (productResponse) => {
            this.productResponse = productResponse;
            this.initializeProduct();
          },
          (error) => {
            this.router.navigate(['/not-found']);
          }
        );
      }
    );
  }


  initializeProduct() {
    //Inizializza la quantità
    const maxQuantity = Math.min(this.productResponse.productQuantity, 5);
    this.opzioniQuantita = Array.from({ length: maxQuantity }, (_, i) => i + 1);
  }

  onAcquista() {
    // this.cartService.addProduct(this.productResponse);
    this.cartService.getOrderInMemory().subscribe(
      (orderInMemory) => {
        console.log("entro")

        // Se esiste già un ordine
        if(orderInMemory) {
          // Se esiste già il Product per l'ordine, allora ne incrementa la quantità e il costoTotale, altrimenti ne crea uno nuovo
          if(orderInMemory.orderForProduct.some((el) => el.idProduct === this.productResponse.idProduct)) {
            // orderForProductInMemory punta direttamente all'occorrenza individuata nell'array
            let orderForProductInMemory = orderInMemory.orderForProduct.find((el) => el.idProduct === this.productResponse.idProduct);
            orderForProductInMemory!.quantita = Number(orderForProductInMemory!.quantita) + Number(this.actualQuantita);
            orderForProductInMemory!.costoTotalePerProdotto = orderForProductInMemory!.costoSingoloPerProdotto * orderForProductInMemory!.quantita;
          } else {
              let orderForProductRequest: CreateOrderForProductRequest = new CreateOrderForProductRequest(
                this.productResponse.productCost,
                this.productResponse.productCost,
                this.actualQuantita,
                this.productResponse.idProduct,
                this.productResponse.photoResponses[0],
                this.productResponse.productName
              );
              orderInMemory.orderForProduct.push(orderForProductRequest);
          }
        } else { // Se non esiste l'ordine
          let orderForProductRequest: CreateOrderForProductRequest = new CreateOrderForProductRequest(
            this.productResponse.productCost,
            this.productResponse.productCost,
            this.actualQuantita,
            this.productResponse.idProduct,
            this.productResponse.photoResponses[0],
            this.productResponse.productName
          );

          console.log("quantita: ", orderForProductRequest.quantita)
          let orderRequest = new CreateOrderRequest(orderForProductRequest.costoTotalePerProdotto,
            new Date(),
            StatusOrder.PRESO_IN_CARICO,
            [orderForProductRequest]
            )

          this.cartService.setOrderInMemory(orderRequest);
        }

      }
    )


    this.cartService.setIsCartOpen(true);
  }

  @HostListener('window:popstate', ['$event'])
  onPopState() {
    this.sharedService.changeSelectedProduct(false)
  }

}
