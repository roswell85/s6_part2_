import { Component } from '@angular/core';
import {LogininfoserviceService} from "../../components/common/logininfoservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {


  constructor(private _loginInfo:LogininfoserviceService,private _router:Router) {

  }

  HandleLoginClick() {

    this._loginInfo.logMeIn('Ali')
    this._router.navigate(['pages'])
  }
}
