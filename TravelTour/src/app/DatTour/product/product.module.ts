import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
import {ProductComponent} from "./product.component";


@NgModule({
  declarations: [
    DanhSachTourComponent,
    ChiTietTourComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,

  ]
})
export class ProductModule { }
