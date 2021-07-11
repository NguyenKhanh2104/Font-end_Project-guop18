import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {map, switchMap,flatMap} from "rxjs/operators";
import {ServerHttpService} from "../ServerHttpService";
// import {ITintuc} from "../tintuc";
// import {TintucService} from "../../tintuc.service";
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.css']
})

export class ChiTietTinTucComponent implements OnInit {
  title = 'cttt';
  public id = 0;
  public routeId: any;
  // NewsData !: any;
  newsId = 0;
  tintuc !: any[];
  page = 1;
  count = 0;
  tableSize = 5;
  detail?: any
  param = ''
  NewsList  : any[]=[];
  constructor(
    private route: ActivatedRoute,
    private httpData: ServerHttpService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.showANew();
    this.showAllNew();
  }
  public showAllNew(){
    this.httpData.getAllNews().subscribe(data => {
      this.NewsList = data;
    })
  }
  public showANew(){
    this.route.params.subscribe(
      data =>{
        this.param = data['id']
      }
    )
    this.httpData.getANews(this.param)
      .subscribe(data =>{
        this.detail = data
      })
  }
  // onEdit(row:any){
  //
  // }

  // async getDetail(id: any){
  //   this.detail = await this.httpData.getANews(id)
  //   console.log(this.detail)
  // }
  public viewDetails(id: any) {
    if (id>0) {
      this.router.navigate(['chitiettintuc', id]);
      // console.log('_dataNews',id);
      this.showANew();
    }
  }
}
