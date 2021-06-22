import {Component, OnInit} from '@angular/core';
import {TourKM} from "../tourKM";
@Component({
  selector: 'app-danh-sach-tin-tuc',
  templateUrl: './danh-sach-tin-tuc.component.html',
  styleUrls: ['./danh-sach-tin-tuc.component.css']
})
export class DanhSachTinTucComponent implements OnInit {
  data : any[];

  constructor(private httpData: TourKM) {
    this.data = [];
    httpData.gettourKM('http://localhost:4200/assets/tourkm.json')
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.data.push(v);
        }
      });
  }
  ngOnInit() {
  }

}
