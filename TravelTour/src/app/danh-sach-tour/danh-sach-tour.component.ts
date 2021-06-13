import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import dsTours from '../_lists/tourKhuyenMai.json';

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  dstourKhuyenMai :{name:String,img:String,price:Number}[]=dsTours;
  constructor(private router:Router) {
  }

  ngOnInit(): void {

  }

}

