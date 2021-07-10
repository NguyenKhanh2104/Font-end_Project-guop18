import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {RouterModule,Routes} from "@angular/router";

const  routers:Routes = [
  {path: '',pathMatch:'full',redirectTo: '/trangchu'},
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routers)
  ]
})
export class AppRoutingModule { }
