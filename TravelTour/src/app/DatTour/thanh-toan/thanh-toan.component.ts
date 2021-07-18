import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServerHttpService} from "../ServerHttpService";

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {
  param = '';
  date:any;
  quantity1 =0;
  quantity2=0;
  detailTour?: any;
  constructor(private route: ActivatedRoute,
              private httpData:ServerHttpService) { }

  ngOnInit(): void {
    this.showDetail();
  }
  public showDetail(){
    this.route.params.subscribe(
      data => {
        this.quantity1 = data['qua1']
        this.quantity2 = data['qua2']
        this.date = data['date']
      }
    )
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
}
