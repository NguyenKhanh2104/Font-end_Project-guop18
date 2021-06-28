import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
const productRoutes: Routes = [
  {path: '',component: DanhSachTourComponent},
  {path: ':id',component: ChiTietTourComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
