import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "../pages/pages.component";
import {LoginpageComponent} from "./loginpage.component";

const routes: Routes = [
  {path:'signin',component:LoginpageComponent},
  {path:'**',redirectTo:'signin'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
