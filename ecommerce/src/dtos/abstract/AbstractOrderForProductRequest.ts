export abstract class AbstractOrderForProductRequest {
  costoTotalePerProdotto: number;
  costoSingoloPerProdotto: number;
  quantita: number;
  idProduct: number;

  constructor(
    costoTotalePerProdotto: number,
    costoSingoloPerProdotto: number,
    quantita: number,
    idProduct: number
  ) {
    this.costoTotalePerProdotto = costoTotalePerProdotto
    this.costoSingoloPerProdotto = costoSingoloPerProdotto;
    this.quantita = quantita;
    this.idProduct = idProduct;
  }
}
