import {StatusOrder} from "../enums/statusorder.enum";
import {AbstractOrderForProductRequest} from "./AbstractOrderForProductRequest";

export abstract class AbstractOrderRequest {
  costoTotale: number;

  dataOrdine: Date;

  statusOrdine: StatusOrder;

  orderForProduct: AbstractOrderForProductRequest[];

  constructor(
    costoTotale: number,
    dataOrdine: Date,
    statusOrdine: StatusOrder,
    orderForProduct: AbstractOrderForProductRequest[]
  ) {
    this.costoTotale = costoTotale;
    this.dataOrdine = dataOrdine;
    this.statusOrdine = statusOrdine;
    this.orderForProduct = orderForProduct;
  }

}
