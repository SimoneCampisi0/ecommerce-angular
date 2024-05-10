import {SessoEnum} from "../enums/sesso.enum";

export class AbstractAnagraficaRequest {
  nome: string

  cognome: string

  dataNascita: string

  sesso: string

  constructor(nome: string,
              cognome: string,
              dataNascita: string,
              sesso: string) {
    this.nome = nome
    this.cognome = cognome
    this.dataNascita = dataNascita
    this.sesso = sesso
  }
}
