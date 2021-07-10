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
  NewsList  ?: any[];

  constructor(
    private httpData: ServerHttpService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.httpData.getAllNews().subscribe(data => {
      this.NewsList = data;
    })


    // this.getNews();
    //  this._dataNews = [];
    // this.httpData.getNews('http://localhost:4200/assets/tintuc.json')
    //    .subscribe(value => {
    //      for (const [k, v] of Object.entries(value)) {
    //        this._dataNews.push(v);
    //      }
    //    });

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


}
