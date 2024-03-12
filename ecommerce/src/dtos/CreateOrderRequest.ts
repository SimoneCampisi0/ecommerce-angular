import {AbstractOrderRequest} from "./abstract/AbstractOrderRequest";
import {StatusOrder} from "./enums/statusorder.enum";
import {CreateOrderForProductRequest} from "./CreateOrderForProductRequest";

export class CreateOrderRequest extends AbstractOrderRequest {
  constructor(costoTotale: number,
              dataOrdine: Date,
              statusOrdine: StatusOrder,
              orderForProduct: CreateOrderForProductRequest[]) {
    super(costoTotale, dataOrdine, statusOrdine, orderForProduct);
  }
}
