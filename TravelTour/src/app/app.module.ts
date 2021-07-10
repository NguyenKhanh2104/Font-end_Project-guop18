import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {TrangchuComponent} from "./DatTour/trangchu/trangchu.component";
import {DattourModule} from "./DatTour/dattour.module";
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DattourModule,RouterModule,HttpClientModule

  ],
  providers: [],
  exports:[HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
