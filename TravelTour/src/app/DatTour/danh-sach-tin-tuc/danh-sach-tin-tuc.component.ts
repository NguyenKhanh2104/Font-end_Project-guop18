import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ServerHttpService} from "../ServerHttpService";
// import {ServerHttp}
import {publish} from "rxjs/operators";
import {FormGroup} from "@angular/forms";
// import {TintucService} from "../../tintuc.service";
// import {ITintuc} from "../tintuc";
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {

  title = 'home';
  _dataNews!: any[];
  allNews!: Object;
  NewsData !: any[];
  // private id: string | null;
  // public News = [];
  dataTourKM: any[] =[];
  detailTour?: any;
  sizeId =1 ;
  NewsList  : any[]=[];
  page = 1;
  count = 0;
  tableSize = 8;

  constructor(
    private httpData: ServerHttpService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.showNews();


    // this.getNews();
    //  this._dataNews = [];
    // this.httpData.getNews('http://localhost:4200/assets/tintuc.json')
    //    .subscribe(value => {
    //      for (const [k, v] of Object.entries(value)) {
    //        this._dataNews.push(v);
    //      }
    //    });

  }
  public showNews(){
    this.httpData.getAllNews().subscribe(data => {
      this.NewsList = data;
    })
  }

  // getNews() {
  //   this.allNews = [];
  //   this.httpData.getAllNews().subscribe((response) => {
  //     this.allNews = response;
  //   })
  // }
  // getNews(){
  //   // this.NewsData = [];
  //   this.httpData.getAllNews().subscribe(res=>{
  //     this.NewsData = res;
  //   })
  // }

  public viewDetails(id: any) {
    this.router.navigate(['chitiettintuc', id]);
  }
  tabSize(event: number) {
    this.page = event;
    this.showNews();
  }
  plusSlides_prev_home() {
    this.httpData.getAtourkm(this.sizeId)
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
      this.sizeId=this.dataTourKM.length;
    }
  }

  plusSlides_next_home() {
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    if(this.sizeId %2 ==0){
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example";
    }else{
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example1";
    }

    if(this.sizeId==this.dataTourKM.length){
      this.sizeId=1;
    }else
      this.sizeId++;
  }

}
