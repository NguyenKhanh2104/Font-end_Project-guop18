import {inject, Injectable} from "@angular/core";
import {HttpClient,} from "@angular/common/http";
import {from, Observable, of, pipe, throwError} from "rxjs";
import {delay, map, tap} from "rxjs/operators";

// import {INews} from "./INews";
@Injectable({
  providedIn: 'root',
})
export class ServerHttpService {
  public baseUrl = "http://localhost:3000/alltour";
  // private  url : string  = "/assets/tourkm.json";
  // private  url1 : string = "/assets/tour.json";
  // private  url2 : string = "/assets/data.json";
  constructor(private http: HttpClient) {
  }

  gettourKM(): Observable<any> {
    const tourKMUrl = "http://localhost:3000/tourkm";
    return this.http.get(tourKMUrl);
  }
  gettourFavo(): Observable<any> {
    const tourFavoUrl = "http://localhost:3000/favorite";
    return this.http.get(tourFavoUrl);
  }

  getAllTour(): Observable<any> {
    const TourUrl = "http://localhost:3000/alltour";
    return this.http.get(TourUrl);
  }

  getAllNews(): Observable<any> {
    const NewsUrl = "http://localhost:3000/News";
    return this.http.get(NewsUrl);
  }

  getANews(id: any) {
    return this.http.get(`http://localhost:3000/News/${id}`);
  }

  getAtour(id: any) {
    return this.http.get(`http://localhost:3000/alltour/${id}`);
  }

  getAtourkm(id: any) {
    return this.http.get(`http://localhost:3000/tourkm/${id}`);
  }

  getTitleTour(title: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?name_like=${title}`);
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
  //Lấy lịch trình của 1 tour du lịch
  getAtourSchedule(id: any){
    return this.http.get(`http://localhost:3000/schedule/${id}`);
  }
  getComment(): Observable<any> {
    const commentUrl = "http://localhost:3000/comment";
    return this.http.get(commentUrl);
  }

}
