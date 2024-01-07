import {AbstractAnagraficaRequest} from "./abstract/AbstractAnagraficaRequest";
import {CreateLuogoResidenzaRequest} from "./CreateLuogoResidenzaRequest";
import {SessoEnum} from "./enums/sesso.enum";

export class CreateAnagraficaRequest extends AbstractAnagraficaRequest {
  luogoResidenzaRequest: CreateLuogoResidenzaRequest

  constructor(nome: string,
              cognome: string,
              dataNascita: Date,
              sesso: SessoEnum,
              luogoResidenzaRequest: CreateLuogoResidenzaRequest) {
    super(nome, cognome, dataNascita, sesso);
    this.luogoResidenzaRequest = luogoResidenzaRequest
  }
}
