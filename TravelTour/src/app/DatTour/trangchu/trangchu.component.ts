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
  dataTourKM: any[] =[];
  dataTourFa: any[] =[];
  dataTourAll: any[] =[];
  dataComment: any[] =[];
  datatourFavo: any[] =[];
  page = 1;
  page2=1;
  page3=3;
  count = 0;
  tableSize = 3;
  public keyword?: string;
  detailTour?: any;
  sizeId =1 ;
  title = "";
   username: any;
  constructor(private route: ActivatedRoute,private httpData: ServerHttpService, private router: Router) {

  }


  ngOnInit(): void {
    this.viewTourKM();
    this.viewComment();
    this.viewFavo();
    this.httpData.getAtourkm(this.sizeId)
      .subscribe(datatour => {
        this.detailTour = datatour
      })
    this.route.params.subscribe(
      data => {
        this.username = data['username']
      }
    )
    if(this.username == null){
      this.username=0;
    }
  if((this.username !== null && this.username !==undefined)&& this.username!=='0'){
      // @ts-ignore
    document.getElementById('login-logout').innerHTML = 'Logout';
  }else{
    if(this.username === 0) {
      // @ts-ignore
      document.getElementById('login-logout').innerHTML = 'Login';
    }
  }
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

  viewTourKM() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM = data;
    })
  }
  viewFavo() {
    this.httpData.gettourFavo().subscribe(data => {
      this.datatourFavo = data;
    })
  }
  viewComment() {
    this.httpData.getComment().subscribe(data => {
      this.dataComment = data;
    })
  }

  public viewDetailsTour(id: any) {
    this.router.navigate(['chitiettour', id,this.username]);
    console.log('dataTourKM', id);
  }

  public SearchTour() {
    this.router.navigate(['danhsachtour',this.keyword]);
  }

  /*Xử lý các nút di chuyển qua lại giữa các phần*/
  plusSlides_prev1() {
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

  plusSlides_next1() {
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
  plusSlides_prev2() {
    this.httpData.gettourFavo().subscribe(data => {
      this.dataTourFa= data;
    })
    if(this.page2 %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide2").style.animationName= "example3";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide2").style.animationName= "example4";
    }
    if(this.page2==1){
      this.page2 = this.dataTourFa.length/this.tableSize;
    }else {
      this.page2--;
    }

  }

  plusSlides_next2() {
    this.httpData.gettourFavo().subscribe(data => {
      this.dataTourFa= data;
    })
    if(this.page2 %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide2").style.animationName= "example";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide2").style.animationName= "example1";
    }
    if(this.page2*this.tableSize >= this.dataTourFa.length){
      this.page2=1;
    }else {
      this.page2++;
    }

  }
  plusSlides_prev3() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })
    if(this.page3 %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide3").style.animationName= "example3";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide3").style.animationName= "example4";
    }
    if(this.page3==1){
      this.page3 = this.dataTourKM.length/this.tableSize;
    }else {
      this.page3--;
    }

  }

  plusSlides_next3() {
    this.httpData.gettourKM().subscribe(data => {
      this.dataTourKM= data;
    })
    if(this.page3 %2 ==0){
      // @ts-ignore
      document.getElementById("tour_slide3").style.animationName= "example";
    }else{
      // @ts-ignore
      document.getElementById("tour_slide3").style.animationName= "example1";
    }
    if(this.page3*this.tableSize >= this.dataTourKM.length){
      this.page3=1;
    }else {
      this.page3++;
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
