import {AbstractUserDTO} from "./AbstractUser/AbstractUserDTO";

export class RegisterDTO extends AbstractUserDTO {
  constructor(email: string, password: string) {
    super(email, password);
  }
}
