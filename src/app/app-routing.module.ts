import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages/pages.component";
import {CanActivatePagesGuard} from "./pages/can-activate-pages.guard";

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./pages/loginpage/loginpage.module').then(m=>m.LoginpageModule)},
  {
    path:'pages',
    loadChildren:()=>import('./pages/pages/pages.module').then(m=>m.PagesModule),
    canActivate:[CanActivatePagesGuard]
  },
  {path:'',redirectTo:'pages',pathMatch:'full'},
  {path:'**',component:PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
