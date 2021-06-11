import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {
    ct_tintuc!:any;
  constructor() {
    this.ct_tintuc =[{'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 1','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 2','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 3','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 4','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 5','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 6','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 7','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'},
      {'img':'../../assets/img/img.png','title':'Vui chơi du lịch thả ga tại Phan Thiết với cẩm nang du lịch này 8','noidung':'Phan Thiết là một thành phố thuộc tỉnh Bình Thuận, nằm trên quốc lộ 1A cách TP Hồ Chí Minh 183 km về'}]
  }

  ngOnInit(): void {
  }

}
