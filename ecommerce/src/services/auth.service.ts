import { Injectable } from '@angular/core';
import { UserDTO } from "../dtos/UserDTO";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  isAuthenticated() { //TODO: implementare controllo che viene richiamato al momento dell'acquisto di un prodotto.
    // Se l'utente non risulta loggato, dev'essere riportato alla pagina di login.
    // if(localStorage.getItem('currentUser')) {
    //   console.log(localStorage.getItem('currentUser'))
    //   this.router.navigate(['home'])
    // } else {
    //   this.router.navigate(['login'])
    // }
  }
}
