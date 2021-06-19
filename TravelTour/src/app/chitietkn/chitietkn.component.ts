import { Component, OnInit } from '@angular/core';
import kinhnghiem from '../_lists/kinhnghiem.json';
@Component({
  selector: 'app-chitietkn',
  templateUrl: './chitietkn.component.html',
  styleUrls: ['./chitietkn.component.css']
})
export class ChitietknComponent implements OnInit {
  title = 'ctkn';
  listkinhnghiem :{img:String,title:String,content:String}[]=kinhnghiem;
  constructor() { }

  ngOnInit(): void {
  }

}
