import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserResponse} from "../../dtos/UserResponse";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  //@ts-ignore
  username: String

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // @ts-ignore
    if(localStorage.getItem('currentUser')) {
      let tempUser: UserResponse =  JSON.parse(localStorage.getItem('currentUser') || "")

      this.authService.getUsernameByUserId(tempUser.idUser).subscribe({
        next: (response) => {
          this.username = response.split(" ", 2)[0]
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

  logout() {
    localStorage.clear();
    location.reload()
  }

}
