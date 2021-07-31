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
  dataTourKM: any[] =[];
  page = 1;
  count = 0;
  tableSize = 3;

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
  plusSlides_prev() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })
    if(this.page==1){
      this.page = this.dataTourKM.length/this.tableSize;
    }else {
      this.page--;
    }
  }

  plusSlides_next() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })
    if(this.page*this.tableSize >= this.dataTourKM.length){
      this.page=1;
    }else {
      this.page++;
    }
  }
}
