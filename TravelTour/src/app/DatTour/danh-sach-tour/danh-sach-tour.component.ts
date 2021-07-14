import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {ServerHttpService} from "../ServerHttpService";
// import {IProduct} from "../product";
// import {ProductService} from "../product.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-danh-sach-tour',
  templateUrl: './danh-sach-tour.component.html',
  styleUrls: ['./danh-sach-tour.component.css']
})
export class DanhSachTourComponent implements OnInit {
  page = 1;
  count = 0;
  tableSize = 8;
  title: any;
  dataTourKM ?: any[];
  dataTour: any[] = [];
  public keyword?: string;

  constructor(private httpData: ServerHttpService, private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.show();
  }

  public show() {
    this.httpData.getAllTour().subscribe(data => {
      this.dataTour = data;
    })
  }

  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTour', id);
  }

  tabSize(event: number) {
    this.page = event;
    this.show();
  }

  Search() {
    if (this.title == "") {
      this.ngOnInit();
    } else {
      this.dataTour = this.dataTour.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    }
  }


}


