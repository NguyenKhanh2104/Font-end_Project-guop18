import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {ThanhToanComponent} from "./thanh-toan/thanh-toan.component";
import {LienHeComponent} from "./lien-he/lien-he.component";
import {KinhnghiemComponent} from "./kinhnghiem/kinhnghiem.component";
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChitietknComponent} from "./chitietkn/chitietkn.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'trangchu',component: TrangchuComponent},
  {path: 'trangchu/:username',component: TrangchuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'thanhtoan/:id/:qua1/:qua2/:date',component: ThanhToanComponent},
  {path: 'lienhe',component: LienHeComponent},
  {path: 'kinhnghiem',component: KinhnghiemComponent},
  {path: 'chitietkinhnghiem/',component: ChitietknComponent},
  {path: 'tintuc',component: DanhSachTinTucComponent},
  {path: 'chitiettintuc/:id',component: ChiTietTinTucComponent},
  {path: 'danhsachtour/:username',component: DanhSachTourComponent},
  {path: 'danhsachtour',component: DanhSachTourComponent},
  {path: 'chitiettour/:id/:username',component: ChiTietTourComponent},
  {path: 'chitiettour/:id/',component: ChiTietTourComponent},
  // {path: 'search/:searchTerm',component: DanhSachTourComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DattourRoutingModule { }
