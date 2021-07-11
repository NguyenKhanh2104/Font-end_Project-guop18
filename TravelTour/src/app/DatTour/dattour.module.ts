import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DattourRoutingModule } from './dattour-routing.module';
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {LienHeComponent} from "./lien-he/lien-he.component";
import {ThanhToanComponent} from "./thanh-toan/thanh-toan.component";
import {KinhnghiemComponent} from "./kinhnghiem/kinhnghiem.component";
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChitietknComponent} from "./chitietkn/chitietkn.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";
import {ServerHttpService} from "./ServerHttpService";
// import { TintucComponent } from './tintuc/tintuc.component';
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    TrangchuComponent,
    LienHeComponent,
    ThanhToanComponent,
    KinhnghiemComponent,
    ChitietknComponent,
    DanhSachTourComponent,
    DanhSachTinTucComponent,
    ChiTietTinTucComponent,
    ChiTietTourComponent

  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    DattourRoutingModule
  ],
  providers:[
    ServerHttpService
  ]
})
export class DattourModule { }
