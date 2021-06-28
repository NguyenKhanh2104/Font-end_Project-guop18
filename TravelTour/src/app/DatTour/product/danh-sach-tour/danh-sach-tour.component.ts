import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {IProduct} from "../../product";
import {ProductService} from "../../product.service";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  productList: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(ps => this.productList = ps);

    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const orderBy = query.get('orderby');
        console.log(orderBy);
      }
    );
  }

}


