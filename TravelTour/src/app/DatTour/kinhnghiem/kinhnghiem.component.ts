import { Component, OnInit } from '@angular/core';
import {TourKM} from "../tourKM";

@Component({
  selector: 'app-kinhnghiem',
  templateUrl: './kinhnghiem.component.html',
  styleUrls: ['./kinhnghiem.component.css']
})
export class KinhnghiemComponent implements OnInit {
  title = 'Kinh Nghiệm';
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
