import {SessoEnum} from "../enums/sesso.enum";

export class AbstractAnagraficaRequest {
  nome: string

  cognome: string

  dataNascita: Date

  sesso: string

  constructor(nome: string,
              cognome: string,
              dataNascita: Date,
              sesso: string) {
    this.nome = nome
    this.cognome = cognome
    this.dataNascita = dataNascita
    this.sesso = sesso
  }
}
