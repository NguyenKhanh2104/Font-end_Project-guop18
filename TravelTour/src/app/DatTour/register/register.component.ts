import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username: any;
  password: any;
  repassword: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  rgister(username: any, password: any, repassword: any) {
    if(username != null && password !=null && password===repassword){
      this.router.navigate(['login']);
    }else{
     if(password!==repassword){
       alert('Bạn nhập sai bước nhập lại mật khẩu')
     }
     else {
       alert('Vui lòng nhập đầy đủ thông tin')
     }
    }
  }
}
