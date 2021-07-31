import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ServerHttpService} from "../ServerHttpService";
// import {IProduct} from "../product";
// import {ProductService} from "../product.service";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  // // productList: IProduct[] = [];
   page = 1;
   count = 0;
   tableSize = 8;
  title = 'dstour';
  dataTour : any[] =[];
  detailTour?: any;
  sizeId =1 ;

  constructor(private httpData: ServerHttpService,private router: Router) {

  }


  ngOnInit(): void {

    this.show();
    this.httpData.getAtour(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })

  }
  public show(){
    this.httpData.getAllTour().subscribe(data => {
      this.dataTour = data;
    })
  }
  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTour',id);
  }
   tabSize(event: number) {
     this.page = event;
     this.show();
   }

  plusSlides_prev() {
    this.httpData.getAtour(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    if(this.sizeId %2 ==0){
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example3";
    }else{
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example4";
    }
    if(this.sizeId>1)
    this.sizeId--;
  }

  plusSlides_next() {
    this.httpData.getAtour(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    if(this.sizeId %2 ==0){
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example1";
    }else{
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example";
    }


    this.sizeId++;
  }
}


