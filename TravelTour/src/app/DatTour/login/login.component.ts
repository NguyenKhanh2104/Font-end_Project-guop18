import { Component, OnInit } from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: any;
  username: any;
  user: any[] = [];


  constructor(private httpData: ServerHttpService, private router: Router) { }

  ngOnInit(): void {
    this.httpData.getUser()
      .subscribe(data => {
        this.user = data;
      })

  }

  public checkUser(username: any, password: any) {
    var a =1;
    for (var i=0;i<this.user.length;i++){
      if(this.user[i].username===username && this.user[i].password===password){
       a=2;
      }
    }
    if(a==2){
      this.router.navigate(['trangchu',username]);
    }
    else{
      alert('Tài khoản hoặc mật khẩu bạn nhập sai!')
    }
  }
}
