import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserResponse} from "../../dtos/UserResponse";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //@ts-ignore
  username: String

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // @ts-ignore
    if(localStorage.getItem('currentUser')) {
      let tempUser: UserResponse =  JSON.parse(localStorage.getItem('currentUser') || "")

      this.authService.getUsernameByUserId(tempUser.idUser).subscribe({
        next: (response) => {
          this.username = response
        },
        error: () => {
          this.username = ""
        }
      })
    }
  }

  goHome() {
    this.router.navigate(['home'])
  }

  cambiaPagina(pagina: string) {
    this.router.navigate([pagina])
  }


}
