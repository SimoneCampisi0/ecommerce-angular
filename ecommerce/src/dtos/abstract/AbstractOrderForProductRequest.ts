import {PhotoDTO} from "../PhotoDTO";

export abstract class AbstractOrderForProductRequest {
  costoTotalePerProdotto: number;
  costoSingoloPerProdotto: number;
  quantita: number;
  idProduct: number;
  fistPhoto: PhotoDTO;
  nomeProdotto: string;

  constructor(
    costoTotalePerProdotto: number,
    costoSingoloPerProdotto: number,
    quantita: number,
    idProduct: number,
    fistPhoto: PhotoDTO,
    nomeProdotto: string
  ) {
    this.costoTotalePerProdotto = costoTotalePerProdotto
    this.costoSingoloPerProdotto = costoSingoloPerProdotto;
    this.quantita = quantita;
    this.idProduct = idProduct;
    this.fistPhoto = fistPhoto;
    this.nomeProdotto = nomeProdotto;
  }
}
