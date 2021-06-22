import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {ThanhToanComponent} from "./thanh-toan/thanh-toan.component";
import {LienHeComponent} from "./lien-he/lien-he.component";
import {KinhnghiemComponent} from "./kinhnghiem/kinhnghiem.component";
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChitietknComponent} from "./chitietkn/chitietkn.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";

const routes: Routes = [
  {path: 'trangchu',component: TrangchuComponent},
  {path: 'thanhtoan',component: ThanhToanComponent},
  {path: 'lienhe',component: LienHeComponent},
  {path: 'kinhnghiem',component: KinhnghiemComponent},
  {path: 'danhsachtour',component: DanhSachTourComponent},
  {path: 'danhsachtintuc',component: DanhSachTinTucComponent},
  {path: 'chitietkinhnghiem',component: ChitietknComponent},
  {path: 'chitiettour',component: ChiTietTourComponent},
  {path: 'chitiettintuc',component: ChiTietTinTucComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DattourRoutingModule { }
