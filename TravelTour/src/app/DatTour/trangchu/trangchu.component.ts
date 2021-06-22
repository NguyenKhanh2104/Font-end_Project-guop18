import {Component, OnInit} from '@angular/core';
import {TourKM} from "../tourKM";

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  title = 'home';
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


  ngOnInit(): void {
  }


}
