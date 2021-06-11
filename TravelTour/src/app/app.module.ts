import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChiTietTourComponent } from './chi-tiet-tour/chi-tiet-tour.component';
import { DanhSachTourComponent } from './danh-sach-tour/danh-sach-tour.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { DanhSachTinTucComponent } from './danh-sach-tin-tuc/danh-sach-tin-tuc.component';
import { ChiTietTinTucComponent } from './chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import { TrangchuComponent } from './trangchu/trangchu.component';



@NgModule({
  declarations: [
    AppComponent,
    ChiTietTourComponent,
    DanhSachTourComponent,
    ThanhToanComponent,
    DanhSachTinTucComponent,
    ChiTietTinTucComponent,
    TrangchuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
