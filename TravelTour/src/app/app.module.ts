import { NgModule } from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from "./app.component";
import {TrangchuComponent} from "./DatTour/trangchu/trangchu.component";
import {DattourModule} from "./DatTour/dattour.module";
import { HttpClientModule} from "@angular/common/http";
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,DattourModule,RouterModule,HttpClientModule,Ng2SearchPipeModule

  ],
  providers: [],
  exports:[HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
