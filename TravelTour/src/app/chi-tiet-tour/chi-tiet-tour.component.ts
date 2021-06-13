import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import chitiettour from '../_lists/chitiettour.json';

@Component({
  selector: 'app-chi-tiet-tour',
  templateUrl: './chi-tiet-tour.component.html',
  styleUrls: ['./chi-tiet-tour.component.css']
})

export class ChiTietTourComponent implements OnInit {
  listchitiettour :{img:String,title:String,price:Number}[]=chitiettour;

  title_main!:string;
  quantityl!:number;
  quantityn!:number;
  titil_lon!:string;
  titil_nho!:string;
  price_lon!:number;
  price_nho!:number;
  navigation!:NavigationExtras;


  constructor(private router:Router) {
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

  tourdetail(tou: any) {
    if(tou){
      this.navigation ={state:tou}
    }
    this.router.navigateByUrl('/ctt');
    this.title_main ='3N2Đ TPHCM - ĐÀ LẠT - TPHCM'
  }
}

