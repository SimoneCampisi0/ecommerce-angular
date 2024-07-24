import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ShortenPipe} from "../../pipes/shorten.pipe";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {UserProfileComponent} from "./detail-user-profile/user-profile.component";

@NgModule({
  declarations: [
    UserProfileComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    ShortenPipe,
    FormsModule,
    RouterOutlet,
    SharedModule
  ]
})
export class ProfileModule { }
