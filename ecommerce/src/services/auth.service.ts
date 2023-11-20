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

  isAuthenticated() {
    if(localStorage.getItem('currentUser')) {
      console.log(localStorage.getItem('currentUser'))
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['login'])
    }
  }
}
