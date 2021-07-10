import {Component, OnInit} from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  title = 'home';
  dataTourKM ?: any[];

  constructor(private httpData: ServerHttpService,private router: Router) {

  }


  ngOnInit(): void {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })

  }
  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTourKM',id);
  }

}
