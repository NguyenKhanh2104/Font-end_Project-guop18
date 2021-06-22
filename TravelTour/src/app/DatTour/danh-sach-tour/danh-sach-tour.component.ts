import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {TourKM} from "../tourKM";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  data : any[];

  constructor(private httpData: TourKM) {
    this.data = [];
    httpData.gettourKM('http://localhost:4200/assets/tourkm.json')
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.data.push(v);
        }
      });
  }
  ngOnInit() {
  }
}

