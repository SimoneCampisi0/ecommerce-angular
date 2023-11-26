export class UserResponse {
  idUser: number

  email: string

  token: string

  constructor(idUser: number,

  email: string,

  token: string) {
    this.idUser = idUser
    this.email = email
    this.token = token
  }
}
