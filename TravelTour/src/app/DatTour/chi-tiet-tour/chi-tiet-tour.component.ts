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
  date:any;
  detailTour?: any;
  schedule?: any;
  dataTour : any[] =[];
  dataRules : any[] =[];
  dataNote : any[] =[];
  dataCancel : any[] =[];
  page = 1;
  count = 0;
  tableSize = 4;
  sum =20000;
  order: any;
  private username1: any;
  contentCM: any;
  constructor(  private route: ActivatedRoute,
                private httpData:ServerHttpService,private router: Router) {}
  ngOnInit(): void {
    this.showDetail();
    this.showAll();
    this.showNote();
    this.showRules();
    this.showCancel();

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
    this.httpData.getAtourSchedule(this.param)
      .subscribe(dataschedule => {
        this.schedule = dataschedule
      })
    this.route.params.subscribe(
      data => {
        this.username1 = data['username']
      }

    )
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
  public viewOrderTour(id: any,date:any) {
    if(date==null){
      alert("Vui lòng chọn ngày khởi hành !");
    }
    this.router.navigate(['thanhtoan', id,this.detailTour.quantity,this.detailTour.quantity2,date]);
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
  public showRules(){
    this.httpData.getAllRules().subscribe(data => {
      this.dataRules = data;
    })
  }
  public showNote(){
    this.httpData.getAllNote().subscribe(data => {
      this.dataNote = data;
    })
  }
  public showCancel(){
    this.httpData.getAllCancel().subscribe(data => {
      this.dataCancel = data;
    })
  }

  checkUser(contentCM: any) {
    if(contentCM== null){
      alert('Vui lòng nhập nội dung !')
    }else{
      if (this.username1 == 0 || this.username1 === 'undefined') {
        alert('Vui lòng đăng nhập ')
      } else {
        alert('Đã gửi')
      }
    }
  }
}
