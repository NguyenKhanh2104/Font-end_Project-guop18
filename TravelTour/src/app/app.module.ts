import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChiTietTourComponent } from './chi-tiet-tour/chi-tiet-tour.component';
import { DanhSachTourComponent } from './danh-sach-tour/danh-sach-tour.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import { DanhSachTinTucComponent } from './danh-sach-tin-tuc/danh-sach-tin-tuc.component';
import { ChiTietTinTucComponent } from './chi-tiet-tin-tuc/chi-tiet-tin-tuc.component';
import {TinTucComponent} from "./danh-sach-tin-tuc/component/TinTuc/tin-tuc.component";
import {FormsModule} from "@angular/forms";

const routesConfig: Routes= [
  {path:'dstintuc', component: DanhSachTinTucComponent }
];
imports:[
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(routesConfig)
]
@NgModule({
    declarations: [
        AppComponent,
        ChiTietTourComponent,
        DanhSachTourComponent,
        ThanhToanComponent,
        DanhSachTinTucComponent,
        ChiTietTinTucComponent,
        TinTucComponent
    ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
