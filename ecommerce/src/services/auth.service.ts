import { Injectable } from '@angular/core';
import { UserDTO } from "../dtos/UserDTO";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RegisterDTO} from "../dtos/RegisterDTO";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }

  isAuthenticated() { //TODO: implementare controllo che viene richiamato al momento dell'acquisto di un prodotto.
    // Se l'utente non risulta loggato, dev'essere riportato alla pagina di login.
    // if(localStorage.getItem('currentUser')) {
    //   console.log(localStorage.getItem('currentUser'))
    //   this.router.navigate(['home'])
    // } else {
    //   this.router.navigate(['login'])
    // }
  }

  register (request: RegisterDTO): Observable<RegisterDTO> {
    return this.http.post<any>('http://localhost:8080/user/auth/register', request)
  }
}
