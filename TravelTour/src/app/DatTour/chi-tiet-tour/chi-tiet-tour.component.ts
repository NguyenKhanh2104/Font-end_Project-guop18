import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {TourKM} from "../tourKM";

@Component({
  selector: 'app-chi-tiet-tour',
  templateUrl: './chi-tiet-tour.component.html',
  styleUrls: ['./chi-tiet-tour.component.css']
})

export class ChiTietTourComponent implements OnInit {

  title = 'home';
  data : any[];

  title_main!:string;
  quantityl!:number;
  quantityn!:number;
  titil_lon!:string;
  titil_nho!:string;
  price_lon!:number;
  price_nho!:number;


  constructor(private httpData: TourKM) {
    this.data = [];
    httpData.gettourKM('http://localhost:4200/assets/tourkm.json')
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.data.push(v);
        }
      });
    this.title_main = '3N2Đ HÀ NỘI - ĐÀ LẠT - HÀ NỘI';
    this.titil_lon ='Người lớn ( > 14 tuổi)';
    this.titil_nho ='Trẻ em ( < 14 tuổi)'
    this.quantityl=2;
    this.quantityn=3;
    this.price_lon=2350000;
    this.price_nho=1350000;
  }
  ngOnInit(): void {
  }

  subtraction_lon() {
    if(this.quantityl>1) {
      this.quantityl--;
    }
  }

  summation_lon() {
    this.quantityl ++;
  }
  subtraction_nho() {
    if(this.quantityn>0)
      this.quantityn --;
  }

  summation_nho() {
    this.quantityn ++;
  }
}

