import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LogininfoserviceService} from "../components/common/logininfoservice.service";

@Injectable({
  providedIn: 'root'
})
export class CanActivatePagesGuard implements CanActivate {

  constructor(private _loginInfo:LogininfoserviceService, private _router:Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(this._loginInfo.isLoggedIn)
      return true;
    this._router.navigate(['login'])
    return false
  }

}
