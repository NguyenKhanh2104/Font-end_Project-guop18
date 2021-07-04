import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TrangchuComponent} from "./trangchu/trangchu.component";
import {ThanhToanComponent} from "./thanh-toan/thanh-toan.component";
import {LienHeComponent} from "./lien-he/lien-he.component";
import {KinhnghiemComponent} from "./kinhnghiem/kinhnghiem.component";
import {DanhSachTinTucComponent} from "./tintuc/danh-sach-tin-tuc/danh-sach-tin-tuc.component";
import {ChitietknComponent} from "./chitietkn/chitietkn.component";
import {ChiTietTinTucComponent} from "./tintuc/chi-tiet-tin-tuc/chi-tiet-tin-tuc.component";

const routes: Routes = [
  {path: 'trangchu',component: TrangchuComponent},
  {path: 'thanhtoan',component: ThanhToanComponent},
  {path: 'lienhe',component: LienHeComponent},
  {path: 'kinhnghiem',component: KinhnghiemComponent},
  {path: 'chitietkinhnghiem',component: ChitietknComponent},
  {path: 'product',loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path: 'tintuc',loadChildren: () => import('./tintuc/tintuc.module').then(m => m.TintucModule) }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DattourRoutingModule { }
