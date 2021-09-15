import { Component, OnInit } from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-thanh-toan',
  templateUrl: './thanh-toan.component.html',
  styleUrls: ['./thanh-toan.component.css']
})
export class ThanhToanComponent implements OnInit {

  param = '';
  detailTour?: any;
  date:any;
  quantity1 =0;
  quantity2=0;
  nameCustomer: any;
  phoneCustomer: any;
  emailCustomer: any;
  addressCustomer: any;
  constructor(private route: ActivatedRoute,
              private httpData:ServerHttpService,private router: Router) { }

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

  public checkout(nameCustomer: any, phoneCustomer: any, emailCustomer: any, addressCustomer: any) {

    if (phoneCustomer == null || nameCustomer == null || addressCustomer == null || emailCustomer ==null) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return false;
    } else {
      var at = emailCustomer.indexOf("@");
      var dot = emailCustomer.lastIndexOf(".");
      var space = emailCustomer.indexOf(" ");
      if ((at != -1) && //có ký tự @
        (at != 0) && //ký tự @ không nằm ở vị trí đầu
        (dot != -1) && //có ký tự .
        (dot > at + 1) && (dot < emailCustomer.length - 1) //phải có ký tự nằm giữa @ và . cuối cùng
        &&
        (space == -1)) //không có khoẳng trắng
      {
        alert("Hoàn tất đặt tour");
        return true;
      } else {
        alert("Địa chiemail không hợp lệ");
        return false;
      }

    }
  }

}
