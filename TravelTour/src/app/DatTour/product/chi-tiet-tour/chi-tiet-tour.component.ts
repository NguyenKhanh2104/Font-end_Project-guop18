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
  product: IProduct | undefined;
  titil_lon!:string;
  titil_nho!:string;

  constructor(  private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.titil_lon ='Người lớn ( > 14 tuổi)';
    this.titil_nho ='Trẻ em ( < 14 tuổi)'
  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      map((params: { get: (arg0: string) => any; }) => params.get('id')),
      switchMap(id => this.productService.findProductById(id))
    ).subscribe(product => this.product = product);
  }

  subtraction_lon() {

  }
  summation_lon() {

  }
  subtraction_nho() {

  }

  summation_nho() {
  }
}

