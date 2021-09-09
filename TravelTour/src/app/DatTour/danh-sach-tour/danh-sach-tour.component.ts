import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ServerHttpService} from "../ServerHttpService";
// import {IProduct} from "../product";
// import {ProductService} from "../product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 8;
  title: any;
  dataTour: any[] = [];
  detailTour?: any;
  sizeId =1 ;

  constructor(private httpData: ServerHttpService, private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.show();
    this.httpData.getAtour(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })

  }
  Search() {
    if (this.title == "") {
      this.ngOnInit();
    } else {
      this.dataTour = this.dataTour.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }
  public show() {
    this.httpData.getAllTour().subscribe(data => {
      this.dataTour = data;
    })
  }

  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTour', id);
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
    if(this.sizeId>1) {
      this.sizeId--;
    }else{
      this.sizeId=this.dataTour.length;
    }
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

if(this.sizeId==this.dataTour.length){
  this.sizeId=1;
}else
    this.sizeId++;
  }
}


