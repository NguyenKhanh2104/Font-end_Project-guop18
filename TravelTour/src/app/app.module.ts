import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {TrangchuComponent} from "./DatTour/trangchu/trangchu.component";
import {DattourModule} from "./DatTour/dattour.module";
import { HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import { LoginComponent } from './DatTour/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './DatTour/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, DattourModule, RouterModule, HttpClientModule, Ng2SearchPipeModule, ReactiveFormsModule

  ],
  providers: [],
  exports:[HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
