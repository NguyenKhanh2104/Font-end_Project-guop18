import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {DanhSachTourComponent} from "./danh-sach-tour/danh-sach-tour.component";
import {DanhSachTinTucComponent} from "./danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChiTietTourComponent} from "./chi-tiet-tour/chi-tiet-tour.component";
import {ChiTietTinTucComponent} from "./chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";
import {ThanhToanComponent} from "./thanh-toan/thanh-toan.component";
import {LienHeComponent} from "./lien-he/lien-he.component";
import {KinhnghiemComponent} from "./kinhnghiem/kinhnghiem.component";



const routes: Routes = [
  { path: '', component: TrangchuComponent },
  { path: 'tour', component: DanhSachTourComponent },
  { path: 'tintuc', component: DanhSachTinTucComponent},
  { path: 'ctt', component: ChiTietTourComponent},
  { path: 'cttt', component: ChiTietTinTucComponent},
  { path: 'lienhe', component: LienHeComponent},
  { path: 'thanhtoan', component:ThanhToanComponent},
  {path:'kinhnghiem',component:KinhnghiemComponent},
  {path:"ctkn",component:KinhnghiemComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
