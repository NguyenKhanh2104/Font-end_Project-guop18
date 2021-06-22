import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {ITourKM} from "./ITourKM";

@Injectable()
export class TourKM{
  private  url : string  = "/assets/tourkm.json";
  constructor(private http : HttpClient) {
  }
  gettourKM(url:string): Observable<any>{
    return this.http.get(this.url);
  }

}
