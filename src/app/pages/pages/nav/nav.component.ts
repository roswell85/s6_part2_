import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";
import {LogininfoserviceService} from "../../../components/common/logininfoservice.service";
import {MenubarModule} from 'primeng/menubar';
import {Router} from "@angular/router";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(public  _loginInfo:LogininfoserviceService,private _router:Router) {
  }
  items: Array<MenuItem> = [
    {label:'Home',routerLink:'/pages',icon:'pi pi-fw pi-home'},
    {label:'Calculator',icon:'pi pi-calculator'},
    {label:'About',icon:'pi pi-info-circle'},
    {label:`Welcome ${this._loginInfo.userName}`,icon:'pi pi-power-off', routerLink:'/login',command:(e)=>{
      //console.log(e.item)
        this._loginInfo.isLoggedIn = false;
        this._loginInfo.userName = '';
      }},

  ];



}
