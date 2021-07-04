import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {map, switchMap} from "rxjs/operators";
import {ITintuc} from "../../tintuc";
import {TintucService} from "../../tintuc.service";


// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-chi-tiet-tin-tuc',
  templateUrl: './chi-tiet-tin-tuc.component.html',
  styleUrls: ['./chi-tiet-tin-tuc.component.css']
})

export class ChiTietTinTucComponent implements OnInit {
  tintuc: ITintuc | undefined;
  tintucList: ITintuc[] = [];
  page = 1;
  count = 0;
  tableSize = 5;

  constructor(  private activatedRoute: ActivatedRoute,
                private tintucService: TintucService,
                private router: Router) {
  }
  ngOnInit(): void {
    this.tintucService.getTintucOneList().subscribe(ps => this.tintucList = ps);

    this.activatedRoute.queryParamMap.subscribe(
      query => {
        const orderBy = query.get('orderby');
        console.log(orderBy);
      }
    );

    this.activatedRoute.paramMap.pipe(
      map((params: { get: (arg0: string) => any; }) => params.get('id')),
      switchMap(id => this.tintucService.findTintucById(id))
    ).subscribe(tintuc => this.tintuc = tintuc);
  }
}

