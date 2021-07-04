import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";
const productRoutes: Routes = [
  {path: '',component: DanhSachTinTucComponent},
  {path: ':id',component: ChiTietTinTucComponent}

];

@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class TintucRoutingModule { }
