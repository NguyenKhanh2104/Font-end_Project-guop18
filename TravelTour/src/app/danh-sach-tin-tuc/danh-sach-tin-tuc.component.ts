import {Component, OnInit} from '@angular/core';
import tintuc from '../_lists/tintuc.json';
@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {
  listtintuc :{img:String,title:String,content:String}[]=tintuc;
  constructor() {
  }

  ngOnInit(): void {
  }

}
