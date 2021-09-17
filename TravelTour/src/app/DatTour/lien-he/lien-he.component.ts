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
        alert("Đã gửi");
        return true;
      } else {
        alert("Địa chiemail không hợp lệ");
        return false;
      }

    }
  }

}
