import { Component, OnInit } from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";

@Component({
  selector: 'app-kinhnghiem',
  templateUrl: './kinhnghiem.component.html',
  styleUrls: ['./kinhnghiem.component.css']
})
export class KinhnghiemComponent implements OnInit {
  title = 'Kinh Nghiệm';
  data ?: any[];

  constructor(private httpData: ServerHttpService) {
  }
  ngOnInit() {
    this.httpData.getAllTour().subscribe(data => {
      this.data = data;
    })
  }
}
