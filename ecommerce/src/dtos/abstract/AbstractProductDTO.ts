import {PhotoDTO} from "../PhotoDTO";

export abstract class AbstractProductDTO {
  idProduct: number

  productName: string

  productDesq: string

  productCost: number

  productQuantity: number

  available: boolean

  codSeller: number

  constructor(idProduct: number,

              productName: string,

              productDesq: string,

              productCost: number,

              productQuantity: number,

              available: boolean,

              codSeller: number) {
    this.idProduct = idProduct
    this.productName = productName
    this.productDesq = productDesq
    this.productCost = productCost
    this.productQuantity = productQuantity
    this.available = available
    this.codSeller = codSeller
  }
}
