import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {TintucService} from "../../tintuc.service";
import {ITintuc} from "../../tintuc";

@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {
  tintucList: ITintuc[] = [];
  page = 1;
  count = 0;
  tableSize = 8;
  constructor(
    private tintucService: TintucService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
   this.show();
  }
  show(){
    this.tintucService.getTintucList().subscribe(ps => this.tintucList = ps);

    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const orderBy = query.get('orderby');
        console.log(orderBy);
      }
    );
  }
  tabSize(event: number) {
    this.page= event;
    this.show();

  }

}
