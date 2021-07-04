import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ProductService} from "../../product.service";
import { IProduct } from '../../../product';
import {map, switchMap} from "rxjs/operators";


// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-chi-tiet-tour',
  templateUrl: './chi-tiet-tour.component.html',
  styleUrls: ['./chi-tiet-tour.component.css']
})

export class ChiTietTourComponent implements OnInit {
  productList: IProduct[] = [];
  page = 1;
  count = 0;
  tableSize = 4;
  product: IProduct | undefined;
  titil_lon!:string;
  titil_nho!:string;
  public quantityl = 1;
  public quantityn = 0;
  constructor(  private activatedRoute: ActivatedRoute,
                private productService: ProductService,
                private router: Router) {
    this.titil_lon ='Người lớn ( > 14 tuổi)';
    this.titil_nho ='Trẻ em ( < 14 tuổi)'
  }
  ngOnInit(): void {
    this.show();
    this.activatedRoute.paramMap.pipe(
      map((params: { get: (arg0: string) => any; }) => params.get('id')),
      switchMap(id => this.productService.findProductById(id))
    ).subscribe(product => this.product = product);
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

  subtraction_lon() {
    if(this.quantityl >1){
      this.quantityl--;
    }

  }
  summation_lon() {
    this.quantityl++;
  }
  subtraction_nho() {
    if(this.quantityn >0){
      this.quantityn--;
    }
  }

  summation_nho() {
    this.quantityn++;

  }
}

