export class ProductDTO {
  idProduct: number

  productName: string

  productDesq: string

  productCost: number

  available: boolean

  codSeller: number

  constructor(idProduct: number,

  productName: string,

  productDesq: string,

  productCost: number,

  available: boolean,

  codSeller: number) {
    this.idProduct = idProduct
    this.productName = productName
    this.productDesq = productDesq
    this.productCost = productCost
    this.available = available
    this.codSeller = codSeller
  }
}
