import {AbstractUserDTO} from "./abstract/AbstractUserDTO";
import {CreateAnagraficaRequest} from "./CreateAnagraficaRequest";

export class LoginUserRequest extends AbstractUserDTO {
  constructor(email: string, password: string) {
    super(email, password);
  }
}
