import {Component, OnInit} from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit {
  title = 'home';
  dataTourKM: any[] =[];
  dataComment: any[] =[];
  page = 1;
  count = 0;
  tableSize = 3;
  public keyword?: string;
  detailTour?: any;
  sizeId =1 ;

  constructor(private httpData: ServerHttpService, private router: Router) {

  }


  ngOnInit(): void {
    this.viewTourKM();
    this.viewComment();
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })

  }

  viewTourKM() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM = data;
    })
  }
  viewComment() {
    this.httpData.getComment().subscribe(data => {
      this.dataComment = data;
    })
  }

  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id]);
    console.log('dataTourKM', id);
  }

  public SearchTour() {
    this.router.navigate(['danhsachtour',this.keyword]);
  }

  plusSlides_prev() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })
    if(this.page %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide").style.animationName= "example3";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide").style.animationName= "example4";
    }
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
    if(this.page %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide").style.animationName= "example";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide").style.animationName= "example1";
    }
    if(this.page*this.tableSize >= this.dataTourKM.length){
      this.page=1;
    }else {
      this.page++;
    }

  }

  plusSlides_prev_home() {
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    if(this.sizeId %2 ==0){
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example3";
    }else{
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example4";
    }
    if(this.sizeId>1) {
      this.sizeId--;
    }else{
      this.sizeId=this.dataTourKM.length;
    }
  }

  plusSlides_next_home() {
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    if(this.sizeId %2 ==0){
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example";
    }else{
      // @ts-ignore
      document.getElementById("ana").style.animationName= "example1";
    }

    if(this.sizeId==this.dataTourKM.length){
      this.sizeId=1;
    }else
      this.sizeId++;
  }
}
