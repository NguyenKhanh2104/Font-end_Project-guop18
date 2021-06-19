import { Component, OnInit } from '@angular/core';
import kinhnghiem from '../_lists/kinhnghiem.json';

@Component({
  selector: 'app-kinhnghiem',
  templateUrl: './kinhnghiem.component.html',
  styleUrls: ['./kinhnghiem.component.css']
})
export class KinhnghiemComponent implements OnInit {
  title = 'kinh Nghiệm';
  listkinhnghiem :{img:String,title:String,content:String}[]=kinhnghiem;
  constructor() { }

  ngOnInit(): void {
  }

}
