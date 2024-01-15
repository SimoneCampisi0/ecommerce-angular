import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  selectedProductHome: boolean = false
  ngOnInit() {
  }

  onSelectedProductHome(status: boolean) {
    this.selectedProductHome = status
  }
}
