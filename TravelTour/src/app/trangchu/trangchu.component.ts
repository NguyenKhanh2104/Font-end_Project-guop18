
import {Component, OnInit} from '@angular/core';
import Tours from '../_lists/tourKhuyenMai.json';
import diemden from '../_lists/diemdennoibat.json';
import goiy from '../_lists/tourGoiY.json';
import comment from '../_lists/binhLuan.json';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  title = 'home';
  tourKhuyenMai :{name:String,img:String,price:Number}[]=Tours;
  tourGoiY :{name:String,img:String,price:Number}[]=goiy;
  noibat :{name:String,img:String}[]=diemden;
  binhluan :{name:String,img:String,comment:String}[]=comment;

  constructor() {
  }


  ngOnInit(): void {
  }



}
