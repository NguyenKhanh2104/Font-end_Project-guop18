import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  title_main!:string;
  data_tour:any;
  image_bg!:string;
  navigation!:NavigationExtras;
  constructor(private router:Router) {
    this.title_main = "Danh Sách Tour";
    this.image_bg = 'assets/img/hinh-anh-vinh-ha-long-21.jpg';
    this.data_tour =[{'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},
      {'title': '3N2Đ Hà Nội - ĐN- Hà Nội','img':'assets/img/img.png' ,price:2350000},

    ]
  }

  ngOnInit(): void {

  }

  tourdetail(tou: any) {
    if(tou){
      this.navigation ={state:tou}
    }
    this.router.navigateByUrl('/ctt')
  }
}

