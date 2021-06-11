import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.css']
})
export class ChiTietTinTucComponent implements OnInit {
  ct_tintuc!:any;
  constructor() {
    this.ct_tintuc =[{'img':'../../assets/img/thdn.jpg','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 1'},
      {'img':'../../assets/img/thdn.jpg','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 2'},
      {'img':'../../assets/img/thdn.jpg','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 3'},
      {'img':'../../assets/img/thdn.jpg','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 4'},
      {'img':'../../assets/img/thdn.jpg','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 5'}
      ]
  }
  ngOnInit(): void {
  }

}
