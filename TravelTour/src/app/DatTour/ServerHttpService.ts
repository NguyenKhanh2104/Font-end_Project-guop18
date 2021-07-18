import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {from, Observable, of, pipe, throwError} from "rxjs";
import {delay, map} from "rxjs/operators";
// import {INews} from "./INews";

@Injectable({
  providedIn:'root',
})
export class ServerHttpService {

  // private  url : string  = "/assets/tourkm.json";
  // private  url1 : string = "/assets/tour.json";
  // private  url2 : string = "/assets/data.json";
  constructor(private http : HttpClient) {
  }
  gettourKM():Observable<any>{
    const NewsUrl = "http://localhost:3000/tourkm";
    return this.http.get(NewsUrl);
  }
  //Lấy danh sách tất cả các tour
  getAllTour():Observable<any>{
    const NewsUrl = "http://localhost:3000/alltour";
    return this.http.get(NewsUrl);
  }
  //Lấy danh sách tất cả các tin tức
  getAllNews():Observable<any>{
    const NewsUrl = "http://localhost:3000/News";
    return this.http.get(NewsUrl);
  }
  //Lấytất cả các điều khoản tour
  getAllRules():Observable<any>{
    const NewsUrl = "http://localhost:3000/rules";
    return this.http.get(NewsUrl);
  }
  //Lấytất cả các yêu cầu khi hủy tour
  getAllCancel():Observable<any>{
    const NewsUrl = "http://localhost:3000/cancel";
    return this.http.get(NewsUrl);
  }
  //Lấy tất cả các lưu ý của chính sách tour
  getAllNote():Observable<any>{
    const NewsUrl = "http://localhost:3000/note";
    return this.http.get(NewsUrl);
  }
  getANews(id: any){
    return this.http.get(`http://localhost:3000/News/${id}`);
  }
  getAtour(id: any){
    return this.http.get(`http://localhost:3000/alltour/${id}`);
  }
  //Lấy lịch trình của 1 tour du lịch
  getAtourSchedule(id: any){
    return this.http.get(`http://localhost:3000/schedule/${id}`);
  }


  // getOrder(id: any){
  //   return this.http.get(`http://localhost:3000/alltour/${id}`);
  // }
  getAtourkm(id: any){
    return this.http.get(`http://localhost:3000/tourkm/${id}`);
  }
  // getANew(id: string): Observable<any> {
  //   const product = this.find(p => p.id === id);
  //   if (product) {
  //     return of(product).pipe(delay(50));
  //   } else {
  //     return throwError(new Error('404 Not Found'));
  //   }
  // }

}
