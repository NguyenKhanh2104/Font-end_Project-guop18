import { Component, OnInit } from '@angular/core';
import {ServerHttpService} from "../ServerHttpService";

@Component({
  selector: 'app-kinhnghiem',
  templateUrl: './kinhnghiem.component.html',
  styleUrls: ['./kinhnghiem.component.css']
})
export class KinhnghiemComponent implements OnInit {
  titlekn = 'Kinh Nghiệm';
  data ?: any[];
  dataTourKM: any[] =[];
  detailTour?: any;
  sizeId =1 ;
  NewsList  : any[]=[];
  page = 1;
  count = 0;
  tableSize = 8;
  title='';


  constructor(private httpData: ServerHttpService) {
  }
  ngOnInit() {
    this.httpData.getComment().subscribe(data => {
      this.data = data;
    })
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
  }
  Search() {
    if (this.title == "") {
      this.ngOnInit();
    } else {
      this.dataTourKM = this.dataTourKM.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
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

