export class ProductDTO {
  idProduct: number

  productName: string

  productDesq: string

  available: boolean

  codSeller: number

  constructor(idProduct: number,

  productName: string,

  productDesq: string,

  available: boolean,

  codSeller: number) {
    this.idProduct = idProduct
    this.productName = productName
    this.productDesq = productDesq
    this.available = available
    this.codSeller = codSeller
  }

  // private String productName;
  //
  // private String productDesq;
  //
  // private Boolean available;
  //
  // private Long codSeller;
}
