import {Stato} from "../enums/Stato";
import {Provincia} from "../enums/Provincia";

export class AbstractLuogoResidenzaRequest {
  stato: Stato

  provincia: Provincia

  comune: string

  indirizzo: string

  civico: string

  CAP: string

  constructor(stato: Stato,
              provincia: Provincia,
              comune: string,
              indirizzo: string,
              civico: string,
              CAP: string) {
    this.stato = stato
    this.provincia = provincia
    this.comune = comune
    this.indirizzo = indirizzo
    this.civico = civico
    this.CAP = CAP
  }

}
