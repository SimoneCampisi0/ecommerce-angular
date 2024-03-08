import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserResponse} from "../../dtos/UserResponse";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  username!: string;

  constructor(private router: Router, private authService: AuthService, private sharedService: SharedService) {}

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

  cambiaPagina(pagina: string) {
    if(pagina === 'home') {
      this.sharedService.changeSelectedProduct(false)
    }
    this.router.navigate([pagina])
  }

  logout() {
    localStorage.clear();
    location.reload()
  }

}
