import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lien-he',
  templateUrl: './lien-he.component.html',
  styleUrls: ['./lien-he.component.css']
})
export class LienHeComponent implements OnInit {
  nameCustomer: any;
  phoneCustomer: any;
  emailCustomer: any;
  content: any;

  constructor() { }

  ngOnInit(): void {
  }

  public sendMessager(nameCustomer: any, phoneCustomer: any, emailCustomer: any, content: any) {
    if(nameCustomer ==null || phoneCustomer == null || emailCustomer == null || content == null){
      alert("Vui lòng nhập đầy đủ thông tin cần thiết!");
    }else {
      alert("Đã gửi thành công !");
    }
  }
}
