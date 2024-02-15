import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ecommerce';

  constructor(private location: Location) { }

  getCurrentUrl(): void {
    console.log("currentURL: ", this.location.path());
  }

  ngOnInit() {
    this.getCurrentUrl()
  }
}
