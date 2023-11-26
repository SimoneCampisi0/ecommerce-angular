import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //@ts-ignore
  username: string

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // @ts-ignore
    this.authService.getUsernameByUserId(JSON.parse(localStorage.getItem('currentUser')).idUser)
  }

  goHome() {
    this.router.navigate(['home'])
  }

  cambiaPagina(pagina: string) {
    this.router.navigate([pagina])
  }


}
