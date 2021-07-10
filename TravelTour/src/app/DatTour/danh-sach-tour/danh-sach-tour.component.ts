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
  // constructor(
  //   // private productService: ProductService,
  //   private activatedRoute: ActivatedRoute,
  // ) { }
  //
  // ngOnInit() {
  //   // this.show();
  // }
  // // show(){
  // //   this.productService.getProductList().subscribe(ps => this.productList = ps);
  // //
  // //   this.activatedRoute.queryParamMap.subscribe(
  // //     query => {
  // //       const orderBy = query.get('orderby');
  // //       console.log(orderBy);
  // //     }
  // //   );
  // // }
  //
  // tabSize(event: number) {
  //   this.page= event;
  //   // this.show();
  //
  title = 'dstour';
  dataTour : any[] =[];

  constructor(private httpData: ServerHttpService,private router: Router) {

  }


  ngOnInit(): void {
    this.show();
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

}


