import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  selectedProductHome: boolean = false
  regexProduct = /\/product\//;

  constructor(private sharedService: SharedService, private location: Location) {
  }
  ngOnInit() {
    this.sharedService.selectedProduct.subscribe(value => {
      this.selectedProductHome = value
    })
  }

  checkURL() {
    return !this.regexProduct.test(this.location.path());
  }
}
