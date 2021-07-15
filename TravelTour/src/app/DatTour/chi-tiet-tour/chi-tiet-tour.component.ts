import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
// import {ProductService} from "../product.service";
// import { IProduct } from '../../product';
import {map, switchMap} from "rxjs/operators";
import {ServerHttpService} from "../ServerHttpService";


// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-chi-tiet-tour',
  templateUrl: './chi-tiet-tour.component.html',
  styleUrls: ['./chi-tiet-tour.component.css']
})

export class ChiTietTourComponent implements OnInit {

  param = '';
  detailTour?: any;
  dataTour : any[] =[];
  page = 1;
  count = 0;
  tableSize = 4;
  sum =20000;
  order: any;
  constructor(  private route: ActivatedRoute,
              private httpData:ServerHttpService,private router: Router) {}
  ngOnInit(): void {
    this.showDetail();
    this.showAll();
  }
  public showDetail(){
    this.route.params.subscribe(
      data => {
        this.param = data['id']
      }
    )
    this.httpData.getAtour(this.param)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
  }
  public showAll(){
    this.httpData.getAllTour().subscribe(data => {
      this.dataTour = data;
    })
  }
  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTour',id);
    this.showDetail();
  }
  public viewOrderTour(id: any,qua1: number,qua2:number) {
    this.router.navigate(['thanhtoan', id,this.detailTour.quantity,this.detailTour.quantity2]);
    console.log('dataTour',id);
    this.showDetail();
  }

  subtraction_lon() {
    if(this.detailTour.quantity >1){
      this.detailTour.quantity--;
    }

  }
  summation_lon() {
    this.detailTour.quantity++;
  }
  subtraction_nho() {
    if(this.detailTour.quantity2 >0){
      this.detailTour.quantity2--;
    }
  }

  summation_nho() {
    this.detailTour.quantity2++;
  }

  public totalmoney(){
    return this.detailTour.price*this.detailTour.quantity +this.detailTour.price*0.75*this.detailTour.quantity2;
  }
}
