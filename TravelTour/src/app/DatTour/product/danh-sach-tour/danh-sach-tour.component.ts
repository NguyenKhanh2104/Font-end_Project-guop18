import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {TourKM} from "../../tourKM";
import {IProduct} from "../../product";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  productList: IProduct[] = [];
  page = 1;
  count = 0;
  tableSize = 8;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.show();
  }
  show(){
    this.productService.getProductList().subscribe(ps => this.productList = ps);

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


