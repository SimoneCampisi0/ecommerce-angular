import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  selectedProductHome: boolean = false

  constructor(private sharedService: SharedService) {
  }
  ngOnInit() {
    this.sharedService.selectedProduct.subscribe(value => {
      console.log("value: "+value)
      this.selectedProductHome = value
    })
  }
}
