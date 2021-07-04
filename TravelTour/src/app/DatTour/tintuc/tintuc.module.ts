import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";
import {TintucRoutingModule} from "./tintuc-routing.module";
import {TintucComponent} from "./tintuc.component";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [
    DanhSachTinTucComponent,
    ChiTietTinTucComponent,
    TintucComponent
  ],
  imports: [
    CommonModule,
    TintucRoutingModule,
    NgxPaginationModule

  ]
})
export class TintucModule { }
